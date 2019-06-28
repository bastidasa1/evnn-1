import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

import { LoginService } from '../../services/login.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {

  code: string;
  user: IUser;

  constructor(private api: LoginService, private router: Router, public toastController:ToastController) { }

  ngOnInit() {
    this.user = this.api.currentUserValue;
    console.log(this.user);
  }

  onLogin() {
    let formData = new FormData();

    formData.append('code', this.code);
    formData.append('id', this.user.id.toString());
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);

    this.api.verify(formData).subscribe(
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
  						bio: response['bio'],
  						profile: response['profile'],
  						api_token: '',
  						created_at: '',
  						updated_at: '',
              password: ''
  					};
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.router.navigate(["/main/home"]);
        }
        else {
          this.showToast('Wrong Code!');
        }
      },
      error => {
        this.showToast('Server Problem!');
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
