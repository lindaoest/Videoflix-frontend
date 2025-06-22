import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-video-offer',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './video-offer.component.html',
  styleUrl: './video-offer.component.scss'
})
export class VideoOfferComponent {

  constructor(
    private authService: AuthService
  ) { }

  public logOut() {
    this.authService.logOut();
  }
}
