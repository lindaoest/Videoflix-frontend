import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'videoflix';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('test2');
    this.http.get(
      'http://localhost:8000/api/api/csrf/',
      { withCredentials: true }
    )
    .subscribe(() => {
      console.log('CSRF cookie gesetzt');
    });

    this.http.post(
      'http://localhost:8000/api/token/refresh/',
      null,
      { withCredentials: true }
    )
    .subscribe({
      error: err => {
        this.router.navigate(['/login'])
      }
    });
  }
}
