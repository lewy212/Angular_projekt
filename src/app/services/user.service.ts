import { Injectable } from '@angular/core';
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[
    new User(1,"admin@mail.pl","nick_admina","admin","Imie_admina","Nazwisko_admina",null),
    new User(2,"user@mail.pl","nick_usera","user","Imie_usera","Nazwisko_usera",[
      new Post(1,
        "Ulubione gry",
        "Moimi ulubionymi grami sa lol i cs",
        false,
        null,
        null,
        null),
      new Post(2,
        "Ulubione filmy",
        "Moimi ulubionymi filmami sa gwiezdne wojny i Harry Potter",
        false,
        null,
        null,
        null)])
  ]

  constructor() { }
}
