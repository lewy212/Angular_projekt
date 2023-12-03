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
  //ngOnInit(): void{}



  onSelect(post: Post): void{
    this.selectedPost = post;
  }
}
