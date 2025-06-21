import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [
    HeaderComponent,
    OverlayBoxComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  public errorMessage!: string;

  public form: FormGroup = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor (
    public http: HttpClient,
    public router: Router
  ) { }

  public submit() {
    this.http.get('http://localhost:8000/api/forgot-password/')
    .subscribe({
      next: value => {
        this.router.navigate(['/']);
        console.log(value);
      },
      error: err => {
        console.log(err.error);

        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    });
  }
}
