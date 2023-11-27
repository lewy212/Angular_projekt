import {Component, Input} from '@angular/core';
import {User} from "../../../klasy/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
  styleUrl: './user-list-element.component.scss'
})
export class UserListElementComponent {
  @Input() public user: User;
  zmienna: boolean = false;

  constructor(private userService: UserService) {
  }
  deleteUser() {
    this.userService.deleteUserById(this.user.id);
  }

  zmienWyglad(ustaw) {
    this.zmienna = ustaw;
    console.log(this.zmienna)
  }
}
