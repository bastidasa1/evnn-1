import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  nowurl: string = `${environment.api.url}/home/nowhappening`;
  feedurl: string = `${environment.api.url}/home/getnews`;
  requrl: string = `${environment.api.url}/home/request`;
  approveurl: string = `${environment.api.url}/home/approve`;
  weekurl: string = `${environment.api.url}/home/getweek`;

  constructor(private httpClient: HttpClient) { }

  sendRequest(formData: any, func: string) {
    let url;
    if (func == 'now') {
        url = this.nowurl;
    } else if (func == 'feed') {
        url = this.feedurl;
    } else if (func == 'request') {
        url = this.requrl;
    } else if (func == 'approve') {
        url = this.approveurl;
    } else if (func == 'week') {
        url = this.weekurl;
    }
    return this.httpClient.post(url, formData);
  }

}
