import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../services/search.service';
import { LoginService } from '../../../services/login.service';

import { EventType } from '../../../interfaces/event';
import { IUser } from '../../../interfaces/user';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  base_flyer_url: string = `${environment.flyer.url}`;
  base_profile_url: string = `${environment.profile.url}`;

  topEvents: EventType[] = [];
  newEvents: EventType[] = [];
  topUsers: IUser[] = [];
  flag: number = 0;
  user: IUser;
  height: string = '600px';

  skey: string;

  slideOpts = {
    slidesPerView: 2
  };

  slideOpts2 = {
    slidesPerView: 5
  };

  constructor(private api: SearchService, private loginService: LoginService) { }

  ngOnInit() {

    this.user = this.loginService.currentUserValue;

    let formData = new FormData();

    this.api.sendRequest(formData, 'topEvents')
        .subscribe(res => {
          this.topEvents = res as EventType[];
        }, err => {
          console.log(err);
    });

    let count;
    this.api.sendRequest(formData, 'newEvents')
        .subscribe(res => {
          this.newEvents = res as EventType[];
          count = this.newEvents.length;
          if (count % 2 == 1) count++;
          this.height = (count / 2 * 200).toString() + 'px';
        }, err => {
          console.log(err);
    });

    formData.append('user_id', this.user.id.toString());
    this.api.sendRequest(formData, 'topUsers')
        .subscribe(res => {
          this.topUsers = res as IUser[];
          this.flag = 1;
        }, err => {
          console.log(err);
          this.flag = 0;
    });
  }

  onInput($event) {
    let formData = new FormData();
    formData.append('key', this.skey);

    this.api.sendRequest(formData, 'search')
        .subscribe(res => {
          if (res['success'] == true)
          {
            this.topUsers = res['users'] as IUser[];
            this.flag = 1;
          }
          else
          {
            this.flag = 0;
          }
        }, err => {
          console.log(err);
          this.flag = 0;
    });
  }
}
