import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private topEventsUrl = `${environment.api.url}/search/topevent`;
  private newEventsUrl = `${environment.api.url}/search/newevent`;
  private topUsersUrl = `${environment.api.url}/search/toppeople`;
  private searchUrl = `${environment.api.url}/search/people`;

  constructor(private httpClient: HttpClient) { }

  sendRequest(formData: any, func: string) {

      let url;

      if (func == 'topEvents') {
          url = this.topEventsUrl;
      } else if (func == 'newEvents') {
          url = this.newEventsUrl;
      } else if (func == 'topUsers') {
          url = this.topUsersUrl;
      } else if (func == 'search') {
          url = this.searchUrl;
      }

      return this.httpClient.post(url, formData);
  }
}
