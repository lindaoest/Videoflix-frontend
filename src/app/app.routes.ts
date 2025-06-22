import { Routes } from '@angular/router';
import { StartsiteComponent } from './features/startsite/startsite.component';
import { LogInComponent } from './features/log-in/log-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { VideoOfferComponent } from './features/video-offer/video-offer.component';
import { AuthGuard } from './auth/auth-guard.guard';
import { ResetPasswordComponent } from './features/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', component: StartsiteComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'overview', component: VideoOfferComponent, canActivate: [AuthGuard] },
];
