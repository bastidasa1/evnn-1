import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../../../services/event.service';
import { LoginService } from '../../../services/login.service';

import { EventType } from '../../../interfaces/event';
import { IUser } from '../../../interfaces/user';
import { Comment } from '../../../interfaces/comment';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {

  base_url: string = `${environment.flyer.url}`;

  event: EventType;
  user: IUser;
  username: string;
  event_id: string;
  count: number;
  comment: string;
  comments: Comment[] = [];

  is_comment: number;

  constructor(private route: ActivatedRoute, private api: EventService, private loginService: LoginService, public toastController: ToastController)
  {
    this.is_comment = 0;
  }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    const id = this.route.snapshot.paramMap.get('id');
    this.event_id = id;

    let formData = new FormData();
    formData.append("id", id.toString());

    this.api.sendRequest(formData, 'get').subscribe(
      (response) => {
        console.log(response);
        this.event = {
					id: response['event']['id'],
					title: response['event']['title'],
					desc: response['event']['desc'],
					startTime: response['event']['startTime'],
					endTime: response['event']['endTime'],
					user_id: response['event']['user_id'],
					image: response['event']['image']
				};
        this.username = response['event']['user_name'];
        this.count = response['count'];
        this.comments = response['comments'];
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

  onLike() {
    let formData = new FormData();

    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', this.event_id.toString());

    this.api.sendRequest(formData, 'like').subscribe(
      (response) => {
        if (response['success'] == true) {
          console.log('success');
          this.count = response['count'];
        }
        else {
          this.showToast('Already liked');
        }
      },
      error => {
        console.log('Error');
      }
    );
  }

  onComment() {
    if (this.is_comment == 0) {
      this.is_comment = 1;
    } else {
      this.is_comment = 0;
    }
  }

  onAddComment() {
    let formData = new FormData();
    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', this.event_id);
    formData.append('comment', this.comment);
    this.api.sendRequest(formData, 'addcomment').subscribe(
      (response) => {
        if (response['success'] == true) {
          console.log('success');
        }
        else {
          //this.showToast('Already liked');
        }
      },
      error => {
        console.log('Error');
      }
    );
  }

  onAddEvent() {
    let formData = new FormData();
    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', this.event_id);
    this.api.sendRequest(formData, 'add').subscribe(
      (response) => {
        if (response['success'] == true) {
          this.showToast('Successfuly added');
        }
        else {
          this.showToast('Already added');
        }
      },
      error => {
        console.log('Error');
      }
    );
  }
}