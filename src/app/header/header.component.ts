import { Component, OnInit, OnDestroy} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../klasy/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSession: User;
  private userSubscription: Subscription;

  constructor(private userService: UserService) {
    console.log('Constructor executed.');
    this.userSubscription = this.userService.userSession$.subscribe(user => {
      this.loadUserSession();
    });
  }

  ngOnInit() {
    console.log('ngOnInit executed.');
    this.loadUserSession();
  }

  private loadUserSession() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      const userId = this.userService.session._id;
      const foundUser = this.userService.users.find(user => user.id === userId);
      this.userSession = foundUser;
    } else {
      this.userSession = null;
    }
  }

  isLoggedIn(): boolean {
    this.loadUserSession();
    return !!this.userSession; // Zwraca true, jeśli użytkownik jest zalogowany
  }

  isAdmin(): boolean {
    console.log("Sesja: ", this.userSession.id);
    return this.userSession.id === 1; // Zwraca true, jeśli użytkownik jest zalogowany i jest administratorem

  }

  logout() {
    this.userService.logout();
    this.loadUserSession();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
