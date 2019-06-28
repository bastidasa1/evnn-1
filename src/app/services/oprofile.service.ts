import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OprofileService {
  private subscribeurl = `${environment.api.url}/oprofile/subscribe`;
  private connecturl = `${environment.api.url}/oprofile/connect`;
  private indexurl = `${environment.api.url}/oprofile/index`;

  constructor(private api: HttpClient) { }

  sendRequest(formData: any, func: string) {
      let url;
      if (func == 'index') {
          url = this.indexurl;
      } else if (func == 'subscribe') {
          url = this.subscribeurl;
      }  else if (func == 'connect') {
          url = this.connecturl;
      }

      return this.api.post(url, formData);
  }
}
