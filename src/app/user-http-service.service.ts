import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./klasy/user.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  url='/assets/dane.json';
  constructor(private http: HttpClient) { }
  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: any[]) =>
        users.map(user => new User(user._id, user._email, user._nickname, user._password, user._name, user._surname, user._posty || []))
      )
    ).toPromise();
  }
}
