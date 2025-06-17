import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeated_password: new FormControl(''),
  });

  constructor(
    public http: HttpClient
  ) { }

  public submit() {
    if (this.form) {
      const body = {
        "email": this.form.controls['email'].value,
        "password": this.form.controls['password'].value,
        "repeated_password": this.form.controls['repeated_password'].value,
      }

      this.http.post('http://localhost:8000/api/registration/', body).subscribe(test => console.log('funktioniert'))
    }
  }
}
