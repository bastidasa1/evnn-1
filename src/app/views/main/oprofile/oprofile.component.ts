import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../../../services/event.service';
import { OprofileService } from '../../../services/oprofile.service';
import { LoginService } from '../../../services/login.service';

import { IUser } from '../../../interfaces/user';
import { EventType } from '../../../interfaces/event';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-oprofile',
  templateUrl: './oprofile.component.html',
  styleUrls: ['./oprofile.component.scss'],
})
export class OprofileComponent implements OnInit {

  imgUrl: string = `${environment.flyer.url}`;
  profileUrl: string = `${environment.profile.url}`;

  events: EventType[] = [];
  user: IUser;
  id: string;
  connections: number;
  bio: string;
  name: string;
  type: number;
  profile: string = "none.png";

  isSubscribed: boolean = true;
  isConnected: boolean = true;
  isApproved: boolean = false;

  constructor(private route: ActivatedRoute, private api: OprofileService, private eventService: EventService, private loginService: LoginService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.loginService.currentUserValue;

    let formData = new FormData();
    formData.append('user_id', this.id);

    this.eventService.sendRequest(formData, 'getorigin')
      .subscribe(res => {
        this.events = res as EventType[];
        console.log(this.events);
      }, err => {
        console.log(err);
      });

    let form = new FormData();
    form.append('user_id', this.user.id.toString());
    form.append('org_id', this.id);
    this.api.sendRequest(form, 'index')
      .subscribe(res => {
        this.name = res['name'];
        this.bio = res['bio'];
        this.profile = res['profile'];
        this.connections = res['connections'];
        this.type = res['privilege'];
        if (this.type == 2)
          this.isSubscribed = res['subscribed'];
        else
        {
          this.isConnected = res['connected'];
          this.isApproved = res['approved'];
        }
      }, err => {
        console.log(err);
      });
  }

   onSubscribe() {
     this.isSubscribed = !this.isSubscribed;

     let formData = new FormData();
     formData.append('user_id', this.user.id.toString());
     formData.append('org_id', this.id);
     formData.append('flag', this.isSubscribed.toString());

     this.api.sendRequest(formData, 'subscribe')
       .subscribe(res => {
         this.isSubscribed = res['subscribed'];
       }, err => {
         console.log(err);
       });
   }

   onConnect() {
     this.isConnected = !this.isConnected;

     let formData = new FormData();
     formData.append('user_id', this.user.id.toString());
     formData.append('org_id', this.id);
     formData.append('flag', this.isConnected.toString());

     this.api.sendRequest(formData, 'connect')
       .subscribe(res => {
         this.isConnected = res['connected'];
         this.isApproved = false;
       }, err => {
         console.log(err);
       });
   }
}
