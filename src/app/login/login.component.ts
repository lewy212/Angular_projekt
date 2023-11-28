import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { SharedService } from "../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private sharedService: SharedService
  ) {}

  login() {
    let user = this.userService.login(this.form.value.username, this.form.value.password);
    if (!user) {
      alert('Invalid username or password');
    } else {
      if (user.id === 1) {
        this.sharedService.updateLoggedIn(true);
        this.sharedService.updateAdmin(true);
        this.router.navigateByUrl('/admin');
      } else {
        this.sharedService.updateLoggedIn(true);
        this.sharedService.updateAdmin(false);
        this.router.navigateByUrl('/logged');
      }
    }
  }
}
