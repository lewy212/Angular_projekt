import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "../public/public.component";
import {LandingComponent} from "../public/landing/landing.component";
import {LoggedComponent} from "./logged.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [{path: '',component: LoggedComponent,children:[
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
    //{path:'',component: LoggedComponent},
    {path:'user-profile',component: UserProfileComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
