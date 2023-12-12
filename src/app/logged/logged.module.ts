import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import {MatButtonModule} from "@angular/material/button";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostProfileComponent } from './user-profile/post-profile/post-profile.component';
import { CommentsPostComponent } from './user-profile/post-profile/comments-post/comments-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostFormularzComponent } from './user-profile/post-formularz/post-formularz.component';
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LoggedComponent,
    UserProfileComponent,
    PostProfileComponent,
    CommentsPostComponent,
    PostFormularzComponent
  ],
    imports: [
        CommonModule,
        LoggedRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class LoggedModule { }
