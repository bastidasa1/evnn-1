import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { HomeService } from '../../../services/home.service';
import { LoginService } from '../../../services/login.service';
import { EventService } from '../../../services/event.service';

import { EventType } from '../../../interfaces/event';
import { IUser } from '../../../interfaces/user';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  base_url: string = `${environment.flyer.url}`;

  nowEvents: EventType[] = [];
  news: EventType[] = [];
  fNow: number = 0;
  fNews: number = 0;
  totalNewsPage: number;
  currentPage: number;
  user: IUser;
  is_comment:number = 0;
  comment: string;
  temp_id: number = -1;

  slideOpts = {
    slidesPerView: 2
  };

  constructor(public modalController: ModalController, private api: HomeService, private loginService: LoginService, public toastController: ToastController, private eventapi: EventService) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    let formData = new FormData();
    this.api.sendRequest(formData, 'now').subscribe(
      (response) => {
        if (response['success'] == true) {
          this.nowEvents = response['events'] as EventType[];
          this.fNow = 1;
        }
        else {
          this.fNow = 0;
        }
      },
      error => {
        console.log('Error');
        this.fNow = 0;
      }
    );

    formData.append('user_id', this.user.id.toString());
    this.api.sendRequest(formData, 'feed').subscribe(
      (response) => {
        if (response['success'] == true) {
          this.news = response['result'] as EventType[];
          this.fNews = 1;
        }
        else {
          this.fNews = 0;
        }
      },
      error => {
        console.log('Error');
        this.fNews = 0;
      }
    );
  }

  async getTicket() {

  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }

  onLike(id: number) {
    let formData = new FormData();

    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', id.toString());

    this.eventapi.sendRequest(formData, 'like').subscribe(
      (response) => {
        if (response['success'] == true) {

        }
        else {
          this.showToast('Already liked');
        }
      },
      error => {
        console.log('Error');
      }
    );

    this.api.sendRequest(formData, 'feed').subscribe(
      (response) => {
        if (response['success'] == true) {
          this.news = response['result'] as EventType[];
          this.fNews = 1;
        }
        else {
          this.fNews = 0;
        }
      },
      error => {
        console.log('Error');
        this.fNews = 0;
      }
    );
  }

  onComment(id: number) {
    if (this.is_comment == 0) {
      this.is_comment = 1;
    } else {
      this.is_comment = 0;
    }
    this.temp_id = id;
  }

  onAddComment() {
    let formData = new FormData();
    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', this.temp_id.toString());
    this.temp_id = -1;
    formData.append('comment', this.comment);
    this.eventapi.sendRequest(formData, 'addcomment').subscribe(
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

  onAddEvent(id: number) {
    let formData = new FormData();
    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', id.toString());
    console.log(id);
    console.log(this.user.id);
    this.eventapi.sendRequest(formData, 'add').subscribe(
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
    this.is_comment = 0;
  }
}
