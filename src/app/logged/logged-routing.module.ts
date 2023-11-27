import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "../public/public.component";
import {LandingComponent} from "../public/landing/landing.component";
import {LoggedComponent} from "./logged.component";

const routes: Routes = [{path: '',component: LoggedComponent,children:[
    {path:'',component: LoggedComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
