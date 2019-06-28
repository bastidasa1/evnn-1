import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private uploadurl = `${environment.api.url}/profile/upload`;
  private editurl = `${environment.api.url}/profile/edit`;
  private indexurl = `${environment.api.url}/profile/index`;

  constructor(private httpClient: HttpClient) { }

  uploadProfileImg(formData: any) {
    return this.httpClient.post(
      this.uploadurl,
      formData);
  }

  edit(formData: any) {
    return this.httpClient.post(
      this.editurl,
      formData);
  }

  index(formData: any) {
    return this.httpClient.post(
      this.indexurl,
      formData);
  }
}
