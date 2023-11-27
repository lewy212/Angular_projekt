import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../klasy/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User;
  constructor(private userService: UserService) {
    this.user = this.userService.session;
  }

}
