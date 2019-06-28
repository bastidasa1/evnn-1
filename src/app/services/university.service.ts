import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";

import { University } from "../interfaces/university";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = `${environment.api.url}/university`;

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.apiUrl)
      .pipe(map(university => {
        return university;
      }));
  }
}
