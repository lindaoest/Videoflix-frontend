import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    OverlayBoxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  public errorMessage!: string;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeated_password: new FormControl('', Validators.required)
  });

  constructor(
    public http: HttpClient,
    public router: Router,
    private authService: AuthService
  ) { }

  public submit() {
    if (this.form) {
      const body = {
        "email": this.form.controls['email'].value,
        "password": this.form.controls['password'].value,
        "repeated_password": this.form.controls['repeated_password'].value,
      }

      this.http.post(
        'http://localhost:8000/api/registration/',
        body,
        { withCredentials: true }
      )
      .subscribe({
        next: (value: any) => {
          this.router.navigate(['/login']);
          // console.log(value);
          // this.authService.logIn(value['token']);
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
}
