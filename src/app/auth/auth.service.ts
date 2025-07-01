import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public logIn(token: string) {
    localStorage.setItem('TOKEN', token);
  }

  public isLoggedIn() {
    return localStorage.getItem('TOKEN');
  }

  public logOut() {
    // localStorage.removeItem('TOKEN');
    this.http.post('http://localhost:8000/api/logout/', null, {
      withCredentials: true
    })
    .subscribe({
      next: value => this.router.navigate(['/log-in']),
      error: err => console.error('Fehler beim Logout:', err)
    })
  }
}
