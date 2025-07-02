import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-log-in',
  imports: [
    HeaderComponent,
    FooterComponent,
    OverlayBoxComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  public errorMessage!: string;

  public form: FormGroup = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor (
    public http: HttpClient,
    public router: Router,
    private authService: AuthService
  ) { }

  public submit() {
    let body = {
      "email": this.form.controls['email'].value,
      "password": this.form.controls['password'].value,
    }

    this.http.post('http://localhost:8000/api/login/', body, { withCredentials: true })
    .subscribe({
      next: (value: any) => {
        // this.authService.logIn(value['token']);
        this.router.navigate(['/overview']);
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
}
