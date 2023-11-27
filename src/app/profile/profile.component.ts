import { Component, OnInit } from '@angular/core';
import { User } from '../klasy/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  userSession: User;

  ngOnInit() {
    const storedSession = localStorage.getItem('session');

    if (storedSession) {
      this.userSession = JSON.parse(storedSession);
      this.getLoggedInUserInfo();
    }
  }

  getLoggedInUserInfo() {
    console.log(this.userSession);
  }
}