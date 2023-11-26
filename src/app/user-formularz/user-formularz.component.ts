import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-formularz',
  templateUrl: './user-formularz.component.html',
  styleUrl: './user-formularz.component.scss'
})
export class UserFormularzComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/.*[A-Z].*/),]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/.*[A-Z].*/),]]
    })

  }

  get email() {
    return this.form.get('email')
  }

  get nickname() {
    return this.form.get('nickname')
  }

  get password() {
    return this.form.get('password')
  }

  get name() {
    return this.form.get('name')
  }

  get surname() {
    return this.form.get('surname')
  }

  register() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.userService.addUser(this.form.value.email,this.form.value.nickname,this.form.value.password,this.form.value.name,this.form.value.surname)
      this.router.navigate([`/allUsers`]);
    } else {
      console.log("Pusty validator");
    }
  }
}
