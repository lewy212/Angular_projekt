import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {HomeComponent} from "./home/home.component";
import {UserFormularzComponent} from "./user-formularz/user-formularz.component";

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'allUsers',component: UserListComponent},
  {path:'user-formularz',component: UserFormularzComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
