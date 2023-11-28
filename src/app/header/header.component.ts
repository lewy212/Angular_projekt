import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { SharedService } from "../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(private userService: UserService, private sharedService: SharedService) {}

  ngOnInit() {
    this.updateLoggedInStatus();

    this.sharedService.newLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });

    this.sharedService.newAdmin$.subscribe((value) => {
      this.isAdmin = value;
    });
  }

  private updateLoggedInStatus() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      let user = JSON.parse(storedSession);
      this.isLoggedIn = true;  // Użytkownik jest zalogowany
      this.isAdmin = true;
    } else {
      this.isLoggedIn = false;  // Brak sesji, użytkownik nie jest zalogowany
      this.isAdmin = false;
    }
  }

  logout() {
    this.userService.logout();
    this.sharedService.updateLoggedIn(false);
    this.sharedService.updateAdmin(false);
  }
}
