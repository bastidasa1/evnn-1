import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MsglistComponent } from '../../../dialogs/msglist';
import { EditprofileComponent } from '../../../dialogs/editprofile';

import { LoginService } from '../../../services/login.service';
import { EventService } from '../../../services/event.service';
import { ProfileService } from '../../../services/profile.service';

import { IUser } from '../../../interfaces/user';
import { EventType } from '../../../interfaces/event';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  imgUrl: string = `${environment.flyer.url}`;
  base_url: string = `${environment.profile.url}`;

  isMode: number = 0;

  user: IUser;
  bio: string;
  events: EventType[] = [];

  conn: number = 0;
  subs: number = 0;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  constructor(public modalController: ModalController, public loginService: LoginService, public eventService: EventService, public sprofile: ProfileService) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    this.bio = this.user.bio;

    let formData = new FormData();
    formData.append('user_id', this.user.id.toString());

    this.eventService.sendRequest(formData, 'gets')
      .subscribe(res => {
        this.events = res as EventType[];
        let i = 0;
        for (i = 0; i < this.events.length; i++) {
          this.eventSource.push({
            title: 'Event',
            desc: this.events[i].desc,
            startTime: new Date(this.events[i].startTime),
            endTime: new Date(this.events[i].endTime),
            allDay: false
          });
        }
        console.log(this.events);
      }, err => {
        console.log(err);
      });

      formData.append('id', this.user.id.toString());

      this.sprofile.index(formData)
        .subscribe(res => {
          this.conn = res['connection'];
          this.subs = res['subscription'];
          console.log(this.events);
        }, err => {
          console.log(err);
        });

      this.sprofile.getProfile(formData)
        .subscribe(res => {
          this.user = {
						id: res['id'],
						name: res['name'],
						email: res['email'],
						email_verified_at: res['email_verified_at'],
						api_token: '',
						created_at: '',
						updated_at: '',
						privilege: res['privilege'],
						username: res['username'],
						university: res['university'],
            bio: res['bio'],
            profile: res['profile'],
            password: ''
					};

          console.log(this.user);

          localStorage.setItem('currentUser', JSON.stringify(this.user));

        }, err => {
          console.log(err);
        });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async onEditProfile() {
    const modal = await this.modalController.create({
      component: EditprofileComponent
    });
    return await modal.present();
  }

  async onMsgList() {
    const modal = await this.modalController.create({
      component: MsglistComponent
    });
    return await modal.present();
  }

  onEvent() {
    this.isMode = 0;
  }

  onCalendar() {
    this.isMode = 1;
  }
}
