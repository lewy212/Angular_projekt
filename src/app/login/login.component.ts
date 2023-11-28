import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { User } from '../klasy/user.model';
import { CurrentSessionService } from '../services/current-session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userSession: User;

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private currentSession: CurrentSessionService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  login() {
    let user = this.userService.login(this.form.value.username, this.form.value.password);
    if (!user) {
      alert('Invalid username or password');
    } else {
      // Ustaw wartość sesji za pomocą serwisu CurrentSessionService
      this.currentSession.setUserSession(user);

      if (user.id === 1) {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/logged');
      }
    }
  }
}