import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { ProfileService } from '../../services/profile.service';
import { UniversityService } from '../../services/university.service';
import { LoginService } from '../../services/login.service';

import { University } from '../../interfaces/university';
import { IUser } from '../../interfaces/user';

import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {

  private base_url = `${environment.profile.url}`;

  university: University[] = [];
  user: IUser;
  profile: string;

  bio: string;
  username: string;
  email: string;
  password: string;
  univer: number;

  filename: string;
  file: any;

  constructor(private api: ProfileService, private loginService: LoginService, private universityService: UniversityService, public toastController: ToastController, public modalController: ModalController) { }

  ngOnInit() {

    this.user = this.loginService.currentUserValue;

    this.bio = this.user.bio;
    this.username = this.user.username;
    this.email = this.user.email;
    this.univer = this.user.university;

    this.profile = this.base_url + this.user.profile;
    this.universityService.getUniversities()
      .subscribe(res => {
        this.university = res;
      }, err => {
        console.log(err);
      });
  }

  uploadFile(event) {
    let elem = event.target;
    if(elem.files.length > 0) {
      this.file = elem.files[0];
      this.filename = elem.files[0].name;
    }
    elem.value = "";

    let formData = new FormData();

    formData.append('myfile', this.file);
    formData.append('user_id', this.user.id.toString());
    formData.append('filename', this.filename);

    this.api.uploadProfileImg(formData).subscribe(
      (response) => {
        this.user.profile = this.user.id + '_' + this.filename;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.profile = this.base_url + this.user.profile;
        this.showToast('Profile image saved!');
      });
  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }

  onBack() {

    let formData = new FormData();

    formData.append('user_id', this.user.id.toString());
    formData.append('bio', this.bio);
    formData.append('username', this.username);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('university', this.univer.toString());

    this.api.edit(formData).subscribe(
      (response) => {
        this.showToast('Profile saved!');

        this.user.bio = this.bio;
        this.user.username = this.username;
        this.user.email = this.email;
        this.user.university = this.univer;

        localStorage.setItem('currentUser', JSON.stringify(this.user));
      },
      error => {
        this.showToast('Error!');
      }
    );

    this.modalController.dismiss();
  }
}
