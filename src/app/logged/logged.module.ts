import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import {MatButtonModule} from "@angular/material/button";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostProfileComponent } from './user-profile/post-profile/post-profile.component';


@NgModule({
  declarations: [
    LoggedComponent,
    UserProfileComponent,
    PostProfileComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MatButtonModule
  ]
})
export class LoggedModule { }
