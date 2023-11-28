import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { SharedService } from "../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private userService: UserService, private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.nowaZawartosc$.subscribe((value) => {
      this.isLoggedIn = value;
      this.updateLoggedInStatus();
    });
  }

  private updateLoggedInStatus() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      let user = JSON.parse(storedSession);
      this.isAdmin = user.id === 1;
    } else {
      this.isAdmin = false;
    }
  }

  logout() {
    this.userService.logout();
    this.sharedService.updateNowaZawartosc(false);
  }
}
