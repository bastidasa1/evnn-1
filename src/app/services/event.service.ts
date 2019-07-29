import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private newurl = `${environment.api.url}/event/new`;
  private getsurl = `${environment.api.url}/event/user`;
  private getoriginsurl = `${environment.api.url}/event/originuser`;
  private geturl = `${environment.api.url}/event`;
  private likeurl = `${environment.api.url}/event/like`;
  private addcommenturl = `${environment.api.url}/event/comment/add`;
  private removecommenturl = `${environment.api.url}/event/comment/remove`;
  private addtolisturl = `${environment.api.url}/event/add`;
  private isCalendarUrl = `${environment.api.url}/event/isCalendar`;
  private removeCalendarUrl = `${environment.api.url}/event/removeCalendar`;

  constructor(private httpClient: HttpClient) { }

  sendRequest(formData: any, func: string) {
      let url;
      if (func == 'post') {
          url = this.newurl;
      } else if (func == 'getorigin') {
          url = this.getoriginsurl;
      } else if (func == 'gets') {
          url = this.getsurl;
      } else if (func == 'get') {
          url = this.geturl;
      } else if (func == 'like') {
          url = this.likeurl;
      } else if (func == 'addcomment') {
          url = this.addcommenturl;
      } else if (func == 'removecomment') {
          url = this.removecommenturl;
      } else if (func == 'add') {
          url = this.addtolisturl;
      } else if (func == 'isCalendar') {
          url = this.isCalendarUrl;
      } else if (func == 'removeCalendar') {
          url = this.removeCalendarUrl;
      }
      return this.httpClient.post(url, formData);
  }
}
