import { Routes } from '@angular/router';
import { StartsiteComponent } from './features/startsite/startsite.component';
import { LogInComponent } from './features/log-in/log-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: StartsiteComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
];
