import {Component, ElementRef, Input} from '@angular/core';
import {User} from "../../../klasy/user.model";
import {Post} from "../../../klasy/post.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.scss'
})
export class PostProfileComponent {
  @Input() public post: Post;
  constructor(private userService: UserService,private element: ElementRef) {
  }

  

}
