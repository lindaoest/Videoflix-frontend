import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './video-offer.component.html',
  styleUrl: './video-offer.component.scss'
})
export class VideoOfferComponent {

  public items$!: Observable<any>;

  constructor(
    private authService: AuthService,
    public http: HttpClient
  ) {
    this.items$ = http.get('http://localhost:8000/api/videos/', { withCredentials: true });
  }

  public logOut() {
    this.authService.logOut();
  }
}
