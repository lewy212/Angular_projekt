import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  ngOnInit() {
    // Sprawdzanie, czy użytkownik jest zalogowany
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      this.isLoggedIn = true;

      // Sprawdzanie roli użytkownika (admin czy user)
      const user = JSON.parse(storedSession);
      if (user && user.role === 'admin') {
        this.isAdmin = true;
      }
    }
  }
}