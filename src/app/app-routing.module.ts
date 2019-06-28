import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleLayout, FullLayout } from './container';

const routes: Routes = [
  {
		path: "",
		redirectTo: "login",
		pathMatch: "full"
	},
  {
		path: "",
		component: SimpleLayout,

		children: [
			{
				path: "",
				loadChildren: "./views/pages/pages.module#PagesModule"
			}
		]
	},
  {
		path: "",
		component: FullLayout,

		children: [
			{
				path: "",
				loadChildren: "./views/main/main.module#MainModule"
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
