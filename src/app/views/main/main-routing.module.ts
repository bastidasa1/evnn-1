import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { EventComponent } from './event';
import { GetticketComponent } from './getticket';
import { ProfileComponent } from './profile';
import { SearchComponent } from './search';
import { OprofileComponent } from './oprofile';
import { NotificationComponent } from './notification';

import { PosteventComponent } from '../../dialogs/postevent';
import { EditprofileComponent } from '../../dialogs/editprofile';
import { CodeComponent } from '../../dialogs/code';
import { VerifyComponent } from '../../dialogs/verify';

const routes: Routes = [
  {
    path: 'main',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      },
      {
        path: 'event/:id',
        component: EventComponent
      },
      {
        path: 'getticket',
        component: GetticketComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'profile/edit',
        component: EditprofileComponent
      },
      {
        path: 'oprofile/:id',
        component: OprofileComponent
      },
      {
        path: 'post',
        component: PosteventComponent
      },
      {
        path: 'code',
        component: CodeComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
