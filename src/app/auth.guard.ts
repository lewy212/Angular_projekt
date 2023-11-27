import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./services/user.service";

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(UserService).session && inject(UserService).session.id === 1)
  {
    console.log("udalo sie")
    return true;
  }
  console.log("Fail")
  inject(Router).navigateByUrl('/');
  return false;
};
