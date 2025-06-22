import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  imports: [
    HeaderComponent,
    FooterComponent,
    OverlayBoxComponent,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  public errorMessage!: string;

  public form: FormGroup = new FormGroup ({
    password: new FormControl('', Validators.required),
    repeated_password: new FormControl('', Validators.required)
  })

  constructor(
    public http: HttpClient,
    public router: Router,
    private authService: AuthService
  ) { }

  public submit() {
    let body = {
      "password": this.form.controls['password'].value,
      "repeated_password": this.form.controls['repeated_password'].value
    }

    this.http.post('http://localhost:8000/api/reset-password/', body)
    .subscribe({
      next: (value: any) => {
        this.router.navigate(['/log-in']);
        console.log(value);
      },
      error: err => {
        console.log(err.error);

        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    })
  }
}
