import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private authService: AuthService,
      private router: Router
    ) {}

    canActivate() {
      // if (this.authService.isLoggedIn) {
      //   return true;
      // } else {
      //   this.router.navigate(['/']);
      //   return false;
      // }
      if (true) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }
};
