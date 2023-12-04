import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";
import {Comment} from "../klasy/comment.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  url = '/assets/dane.json';
  constructor(private http: HttpClient) { }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: any[]) =>
        users.map(user => this.mapUser(user))
      )
    ).toPromise();
  }

  private mapUser(user: any): User {
    console.log('Mapped user:', user);
    return new User(
      user._id,
      user._email,
      user._nickname,
      user._password,
      user._name,
      user._surname,
      user._posty?.map((post: any) => this.mapPost(post)) || []
    );
  }

  private mapPost(post: any): Post {
    console.log('Mapped post:', post);
    return new Post(
      post._id,
      post._title,
      post._content,
      post._wasEdited,
      post._liczbaLikow,
      post._previousEditions,
      post._comments?.map((comment: any) => this.mapComment(comment)) || []
    );
  }

  private mapComment(comment: any): Comment {
    console.log('Mapped comment:', comment);
    return new Comment(
      comment._nickname,
      comment._content,
      comment._wasEdited
    );
  }
}
