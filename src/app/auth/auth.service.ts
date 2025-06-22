import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  public logIn(token: string) {
    localStorage.setItem('TOKEN', token);
  }

  public isLoggedIn() {
    return localStorage.getItem('TOKEN');
  }

  public logOut() {
    localStorage.removeItem('TOKEN');
    this.router.navigate(['/log-in'])
  }
}
