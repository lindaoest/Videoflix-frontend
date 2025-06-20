import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { OverlayBoxComponent } from '../../shared/components/overlay-box/overlay-box.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [
    HeaderComponent,
    FooterComponent,
    OverlayBoxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

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
    this.http.get('http://localhost:8000/api/login/')
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
