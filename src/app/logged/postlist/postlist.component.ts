import { Component } from '@angular/core';
import {Post} from "../../klasy/post.model";
import {UserService} from "../../services/user.service";
import {User} from "../../klasy/user.model";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.scss'
})
export class PostListComponent {
  searchText: string = "";
  userList: User[] = [];
  postList: Post[] = [];
  menu: any;
  listaZainteresowan: String[];
  //Lista wszystkich postów od użytkowników po kolei
  selectedPost: Post = null;

  constructor(private userService: UserService){
    //dla funkcji nizej i wyzej robisz userList: User[]

    this.userList = this.userService.users;
    this.inputUserPost();

  } //Aby korzystać z userservice potrzebny jest konstruktor


  //jak cos to tez dziala i jest ladniej napisane  + pod projekt z jsa bardziej i tez mozna do kontruktora
  inputUserPost() {
    this.userList.forEach((user) => {
      if(user.posty!=null){
        user.posty.forEach((post) => {
          this.postList.push(post);
        });
      }
    });
  }


  showPreviousVersions(post: Post): void {
    console.log("Poprzednie wersje posta:", post.previousEditions);
  }

  onSelect(post: Post): void{
    this.selectedPost = post;
  }
  likedPost(idPostu: number): boolean{
    let czyWyswietlic = true;

    if(this.postList[idPostu-1] && this.postList[idPostu-1].liczbaLikow !== null)
    {
      this.postList[idPostu-1].liczbaLikow.forEach(like=>
      {
        if(like ===this.userService.session._id)
        {
          czyWyswietlic = false;
        }
      })
    }
    return czyWyswietlic;
  }

  addLike() {
    if (!this.selectedPost.liczbaLikow) {
      this.selectedPost.liczbaLikow = []; // Inicjalizacja, jeśli null
    }
    let czyDodac = true;
    let idLike;
    this.selectedPost.liczbaLikow.forEach((like, index)=>
    {
      if(like ===this.userService.session._id)
      {
        czyDodac = false;
        idLike = index;
      }
    })
    if(czyDodac)
    {
      this.selectedPost.liczbaLikow.push(this.userService.session._id);
    }
    else {
      this.selectedPost.liczbaLikow.splice(idLike, 1);
    }
  }

}
