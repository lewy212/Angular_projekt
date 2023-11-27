import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
  });
  constructor(private userService: UserService, private fb: FormBuilder,private router: Router) {
  }
  login(){
    let user=this.userService.login(this.form.value.username,this.form.value.password);
    if(!user){
      alert('Invalid username or password');
    }else {
      if(user.id === 1)
      {
        this.router.navigateByUrl('/admin')
      }
      else {
        alert('Narazie nie ma logowania dla usera ale dales poprawne dane ;)');
      }
    }
  }
}