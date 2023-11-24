import { Injectable } from '@angular/core';
import {User} from "../klasy/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[
    new User(1,"admin@mail.pl","nick_admina","admin","Imie_admina","Nazwisko_admina"),
    new User(2,"user@mail.pl","nick_usera","user","Imie_usera","Nazwisko_usera")
  ]

  constructor() { }
}
