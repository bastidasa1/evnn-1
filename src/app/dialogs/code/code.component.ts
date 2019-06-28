import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {

  code: number = 1;
  num: string;

  constructor(private api: HomeService, private modal: ModalController, public toastController: ToastController) { }

  ngOnInit() {

  }
  onVerify() {
    let formData = new FormData();

    formData.append('id', this.code.toString());
    formData.append('code', this.num);

    this.api.sendRequest(formData, 'approve').subscribe(
      (response) => {
        if (response['success'] == true) {
          this.showToast('Successfully Added!');
        } else {
          this.showToast('Wrong Code!');
        }
      },
      error => {
        this.showToast('Wrong Code!');
      }
    );
  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }
}
