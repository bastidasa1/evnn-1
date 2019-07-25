import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';

import { LoginService } from "../../../services/login.service";
import { IUser } from "../../../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  name:string;
  password:string;
  user:IUser;

  constructor(private loginService: LoginService, private router: Router, public toastController:ToastController) { }

  ngOnInit() {}

  onLogin() {
    this.loginService.login(this.name, this.password)
			.pipe(first())
			.subscribe(
				(data: IUser) => {
          this.user = {
						id: data['id'],
						name: data['name'],
						email: data['email'],
						email_verified_at: data['email_verified_at'],
						api_token: '',
						created_at: '',
						updated_at: '',
						privilege: data['privilege'],
						username: data['username'],
						university: data['university'],
            bio: data['bio'],
            profile: data['profile'],
            password: this.password
					};
          if (this.user.id == null || this.user.id === "undefined") this.showToast('Wrong Password!');
          else {
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            console.log(this.user);
            this.router.navigate(["/main/home"]);
          }
				},
				error => {
          this.showToast('Wrong Password!');
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
