import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

import { LoginService } from '../../services/login.service';
import { EventService } from '../../services/event.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.component.html',
  styleUrls: ['./postevent.component.scss'],
})
export class PosteventComponent implements OnInit {

  filename: string;
  date: string;
  timefrom: string;
  timeto: string;
  description: string;
  file: any;

  constructor(private fileService: EventService, private loginService: LoginService, public toastController: ToastController, private router: Router) { }

  ngOnInit() {}

  uploadFile(event) {
    let elem = event.target;
    if(elem.files.length > 0) {
      this.file = elem.files[0];
      this.filename = elem.files[0].name;
    }
    elem.value = "";
  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }

  onSubmit() {

    let user = this.loginService.currentUserValue;

    let formData = new FormData();

    formData.append('myfile', this.file);
    formData.append('filename', this.filename);
    formData.append('date', this.date);
    formData.append('timefrom', this.timefrom);
    formData.append('timeto', this.timeto);
    formData.append('description', this.description);
    formData.append('user_id', user.id.toString());

    this.fileService.sendRequest(formData, 'post').subscribe(
      (response) => {
        this.showToast('Event ' + response + ' saved!');
        this.router.navigate(["/main/profile"]);
      });
  }

  onClose() {
    //this.destroy();
  }
}
