import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private indexurl = `${environment.api.url}/notification/index`;
  private connecturl = `${environment.api.url}/notification/connect`;

  constructor(private httpClient: HttpClient) { }

  sendRequest(formData: any, func: string) {
      let url;

      if (func == 'index') {
          url = this.indexurl;
      } else if (func == 'connect') {
          url = this.connecturl;
      }

      return this.httpClient.post(url, formData);
  }
}
