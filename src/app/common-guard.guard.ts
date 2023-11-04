import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const commonGuardGuard: CanActivateFn = (route, state) => {
  let b = !!localStorage.getItem('token');
  if (!b) {
    inject(Router).navigate(['login'])
  }
  return b;
};

export const loginGuard: CanActivateFn = (route, state) => {
  let b = !!localStorage.getItem('token');
  if (b) {
    inject(Router).navigate(['cabinet'])
  }
  return true;
};
