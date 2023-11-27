import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoggedComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MatButtonModule
  ]
})
export class LoggedModule { }
