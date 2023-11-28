import { Component, OnInit} from '@angular/core';
import { UserService } from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.updateLoggedInStatus();
  }

  private updateLoggedInStatus() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      let user = JSON.parse(storedSession);
      this.isLoggedIn = true;
      
      // Sprawdź, czy użytkownik ma id równy 1
      if (user.id === 1) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isLoggedIn = false;
      this.isAdmin = false;
    }
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
