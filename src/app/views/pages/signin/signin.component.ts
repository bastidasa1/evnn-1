import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

import { UniversityService } from '../../../services/university.service';

import { LoginService } from '../../../services/login.service';
import { IUser } from '../../../interfaces/user';
import { University } from '../../../interfaces/university';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  user: IUser;
  university: University[] = [];

  account_type: number;
  university_id: number;
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(public loginService:LoginService, public universityService:UniversityService, private router: Router, public toastController:ToastController) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;
    this.universityService.getUniversities()
      .subscribe(res => {
        this.university = res;
        console.log(this.university);
      }, err => {
        console.log(err);
      });
  }

  onSignin() {
    let formData = new FormData();

    formData.append('account_type', this.account_type.toString());
    formData.append('university', this.university_id.toString());
    formData.append('name', this.name);
    formData.append('username', this.username);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('password_confirmation', this.password);
    console.log('ok');
    this.loginService.signin(formData).subscribe(
      (response) => {
        if (response['success'] == true) {
          this.user = {
  						id: response['id'],
  						name: response['name'],
  						email: response['email'],
              email_verified_at: response['email_verified_at'],
  						privilege: response['privilege'],
  						username: response['username'],
  						university: response['university'],
              profile: response['profile'],
  						bio: '',
  						api_token: '',
  						created_at: '',
  						updated_at: '',
              password: this.password
  					};
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.router.navigate(["/main/home"]);
        }
      },
      error => {
        this.showToast('Error!');
      }
    );
  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }
}
