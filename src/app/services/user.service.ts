import { Injectable } from '@angular/core';
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";
import {Router} from "@angular/router";
import {Comment} from "../klasy/comment.model";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSessionSubject = new BehaviorSubject<User>(null);
  userSession$ = this.userSessionSubject.asObservable();
  users: User[]=[
    new User(1,"admin@mail.pl","admin","admin","Imie_admina","Nazwisko_admina",null),
    new User(2,"user@mail.pl","user","user","Imie_usera","Nazwisko_usera",[
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
    new User(3,"user2@mail.pl","user2","user2","Imie_usera2","Nazwisko_usera2",[
      new Post(1,
        "Ulubione gry us2",
        "Moimi ulubionymi grami sa lol i cs us2",
        false,
        null,
        null,
        [new Comment("nick_usera2","Pierwszy komentarz ever",false)]),
      new Post(2,
        "Ulubione filmy us2",
        "Moimi ulubionymi filmami sa gwiezdne wojny i Harry Potter us2",
        false,
        null,
        null,
        null)]),
    new User(4,"user3@mail.pl","user3","user3","Imie_usera3","Nazwisko_usera3",null)
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
  session: any;
  constructor(private router: Router)
  {
    let session: any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    }
    this.session = session;
    console.log("Sesja w konstruktorze: ", this.session);
  }
  login(username: string, password: string){
    let user = this.users.find((u)=>u.nickname===username && u.password===password);
    if(user){
      this.session = user;
      localStorage.setItem('session',JSON.stringify(this.session));
    }
    console.log("Sesja wloginie: ", this.session);
    return user;
  }
  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
