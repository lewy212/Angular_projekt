import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";
import {Comment} from "../klasy/comment.model";
import {catchError, map, Observable, of} from "rxjs";

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
  addUserHttp(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<User>(this.url,user,httpOptions).pipe(catchError(this.handleError<User>('addUser')));
  }
  deleteUserHttp(userId: number): Observable<void> {
    //const url = `${this.url}/${userId}`;
    return this.http.delete<void>(this.url).pipe(
      catchError(this.handleError<void>('deleteUser'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
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


  //todo: costam
  // editPost(postId: number, updatedPost: Post): Observable<any> {
  //   const url = `${this.url}/${postId}`;
  //
  //   // dane do żądania
  //   const requestBody = {
  //     title: updatedPost.title,
  //     content: updatedPost.content,
  //     // inne pola do aktualizacji
  //   };
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     body: requestBody, // Przekaż dane w ciele żądania DELETE
  //   };
  //   //żądanie (ale jest w delete także to do zmiany)
  //   return this.http.delete<void>(url, httpOptions).pipe(
  //     catchError(this.handleError<void>('editPost'))
  //   );
  // }

}
