import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { NotificationService } from '../../../services/notification.service';
import { LoginService } from '../../../services/login.service';

import { IUser } from '../../../interfaces/user';
import { MiniUser } from '../../../interfaces/miniuser';
import { Log } from '../../../interfaces/log';
import { History } from '../../../interfaces/history';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  profile_url: string = `${environment.profile.url}`;
  flyer_url: string = `${environment.flyer.url}`;

  user: IUser;
  connections: MiniUser[] = [];
  logs: Log[] = [];
  historys: History[] = [];

  constructor(private api: NotificationService, private loginService: LoginService, public toastController: ToastController) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;

    this.doInit();
  }

  doInit() {
    let formData = new FormData();

    formData.append('user_id', this.user.id.toString());
    this.api.sendRequest(formData, 'index').subscribe(
      (response) => {
        this.connections = response['connection'] as MiniUser[];
        this.logs = response['log'] as Log[];
        this.historys = response['users'] as History[];
      },
      error => {
        console.log('Error');
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

  onAccept(id: number) {

    let formData = new FormData();

    formData.append('user1', this.user.id.toString());
    formData.append('user2', id.toString());
    this.api.sendRequest(formData, 'connect').subscribe(
      (response) => {
        if (response['success'] == true)
        {
          this.doInit();
          this.showToast(response['user'] + ' is connected!');
        }
      },
      error => {
        console.log('Error');
      }
    );
  }

}
