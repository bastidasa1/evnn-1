import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCalendarModule  } from 'ionic2-calendar';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

import { MainRoutingModule } from './main-routing.module';

import { HomeComponent } from './home';
import { EventComponent } from './event';
import { GetticketComponent } from './getticket';
import { ProfileComponent } from './profile';
import { SearchComponent } from './search';
import { OprofileComponent } from './oprofile';
import { NotificationComponent } from './notification';

import { PosteventComponent } from '../../dialogs/postevent';
import { MsglistComponent } from '../../dialogs/msglist';
import { EditprofileComponent } from '../../dialogs/editprofile';
import { CodeComponent } from '../../dialogs/code';
import { VerifyComponent } from '../../dialogs/verify';

@NgModule({
  declarations: [HomeComponent, EventComponent, GetticketComponent,
    ProfileComponent, PosteventComponent, MsglistComponent, EditprofileComponent,
    SearchComponent, OprofileComponent, NotificationComponent, CodeComponent, VerifyComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    NgCalendarModule
  ],
  providers: [
    PayPal
  ],
  entryComponents: [PosteventComponent, MsglistComponent, EditprofileComponent, CodeComponent, VerifyComponent]
})
export class MainModule { }
