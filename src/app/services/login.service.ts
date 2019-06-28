import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";

import { IUser } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

    private loginUrl = `${environment.api.url}/login`;
    private signUrl = `${environment.api.url}/register`;
    private verifyUrl = `${environment.api.url}/verify`;

    constructor(private http: HttpClient) { }

    public get currentUserValue(): IUser {
      return JSON.parse(localStorage.getItem('currentUser'));
    }

    login(name: string, password: string) {

      return this.http.post<IUser>(this.loginUrl, { email: name, password: password })
        .pipe(map(user => {
          if (user && user.api_token) {
              localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }));
    }

    signin(formData: any) {
      return this.http.post(
        this.signUrl,
        formData);
    }

    verify(formData: any) {
      return this.http.post(
        this.verifyUrl,
        formData);
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
