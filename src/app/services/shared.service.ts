import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private valueLoggedIn = new BehaviorSubject<boolean>(false);
  private valueAdmin = new BehaviorSubject<boolean>(false);
  newLoggedIn$ = this.valueLoggedIn.asObservable();
  newAdmin$ = this.valueAdmin.asObservable();
  
  updateLoggedIn(value: boolean) {
    this.valueLoggedIn.next(value);
  }
  updateAdmin(value: boolean) {
    this.valueAdmin.next(value);
  }
}