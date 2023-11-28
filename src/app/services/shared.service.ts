import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private nowaZawartoscSource = new BehaviorSubject<boolean>(false);
  nowaZawartosc$ = this.nowaZawartoscSource.asObservable();

  updateNowaZawartosc(value: boolean) {
    this.nowaZawartoscSource.next(value);
  }
}