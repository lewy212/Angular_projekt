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
        null)]),
    new User(3,"user2@mail.pl","nick_usera2","user","Imie_usera2","Nazwisko_usera2",[
      new Post(1,
        "Ulubione gry us2",
        "Moimi ulubionymi grami sa lol i cs us2",
        false,
        null,
        null,
        null),
      new Post(2,
        "Ulubione filmy us2",
        "Moimi ulubionymi filmami sa gwiezdne wojny i Harry Potter us2",
        false,
        null,
        null,
        null)])
  ]
  deleteUserById(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1 && index!==0) {
      this.users.splice(index, 1);
    }
  }
  addUser(email,nickname,password,name,surname)
  {
    this.users.push(new User(this.users.length+1,email,nickname,password,name,surname,null))
  }

  constructor() { }
}
