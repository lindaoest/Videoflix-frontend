import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public errorMessage!: string;
  public isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public logIn(body: any) {
    this.http.post(
      'http://localhost:8000/api/login/',
      body,
      { withCredentials: true }
    )
    .subscribe({
      next: (value: any) => {
        this.router.navigate(['/overview']);
        this.isLoggedIn = true;
        console.log('value', value);
      },
      error: err => {
        console.log('error', err);

        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    });
  }

  public logOut() {
    this.http.post(
      'http://localhost:8000/api/logout/',
      null,
      { withCredentials: true }
    )
    .subscribe({
      next: value => {
        this.router.navigate(['/log-in']);
        this.isLoggedIn = false;
      },
      error: err => console.error('Fehler beim Logout:', err)
    })
  }
}
