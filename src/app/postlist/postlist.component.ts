import { Component } from '@angular/core';
import {Post} from "../klasy/post.model";
import {UserService} from "../services/user.service";
import {User} from "../klasy/user.model";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.scss'
})
export class PostListComponent {

  userList: User[] = this.userService.getUserList();
  postList: Post[] = [];

  //Lista wszystkich postów od użytkowników po kolei
  selectedPost: Post = null;

  constructor(private userService: UserService){
    //dla funkcji nizej i wyzej robisz userList: User[]
    // this.userList = this.userService.users;
    this.inputUserPost();

  } //Aby korzystać z userservice potrzebny jest konstruktor

  inputUserPost(){
    let tmpPosty: Post[] = this.userList[1].posty;
    this.postList.push(tmpPosty.at(0));
    this.postList.push(tmpPosty.at(1));
    tmpPosty = this.userList[2].posty;
    this.postList.push(tmpPosty.at(0));
    this.postList.push(tmpPosty.at(1));
    //NIE UZYWAC POPA USUWA WSZEDZIE
    //cztery posty na razie na stale
  }
  //jak cos to tez dziala i jest ladniej napisane  + pod projekt z jsa bardziej i tez mozna do kontruktora
  // inputUserPost() {
  //   this.userList.forEach((user) => {
  //     if(user.posty!=null){
  //       user.posty.forEach((post) => {
  //         this.postList.push(post);
  //       });
  //     }
  //   });
  // }
  //ngOnInit(): void{}



  onSelect(post: Post): void{
    this.selectedPost = post;
  }
}
