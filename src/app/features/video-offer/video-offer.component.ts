import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

interface Video {
  title: string;
  video_file: string;
  genre: number;
}

@Component({
  selector: 'app-video-offer',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './video-offer.component.html',
  styleUrl: './video-offer.component.scss'
})
export class VideoOfferComponent {

  public items$!: Observable<any>;
  public hero$!: Observable<any>;

  constructor(
    private authService: AuthService,
    public http: HttpClient,
    public router: Router,
  ) {
    this.items$ = http.get('http://localhost:8000/api/videos/', { withCredentials: true });

    this.hero$ = http.get('http://localhost:8000/api/video/', { withCredentials: true });
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
        localStorage.removeItem('isLoggedIn')
        // this.authService.isLoggedIn = false;
      },
      error: err => console.error('Fehler beim Logout:', err)
    })
  }
}
