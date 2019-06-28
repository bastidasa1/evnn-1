import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';

import { LoginComponent } from './login';
import { SigninComponent } from './signin';

@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    FormsModule,
    CommonModule,
    PagesRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ]
})
export class PagesModule { }
