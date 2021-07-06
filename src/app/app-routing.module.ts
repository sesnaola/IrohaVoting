import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollComponent } from './shared/components/poll/poll.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { PollDetailsComponent } from './shared/components/poll-details/poll-details.component';
import { PollDetailsComponent02 } from './shared/components/poll-details-02/poll-details-02.component';
import { PollDetailsComponent03 } from './shared/components/poll-details-03/poll-details-03.component';

export const ROUTES: Routes = [
  { path: 'poll', component: PollComponent, canActivate: [AuthGuardService] },
  { path: 'poll-details/01', component: PollDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'poll-details/02', component: PollDetailsComponent02, canActivate: [AuthGuardService] },
  { path: 'poll-details/03', component: PollDetailsComponent03, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
