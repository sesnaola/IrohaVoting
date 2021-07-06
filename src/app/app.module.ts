import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'
import { CommonModule } from '@angular/common';

// CHARTS MODULES

// import { PieChartModule } from './shared/src/pie-chart/pie-chart.module';

// END CHARTS MODULES

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ClarityModule } from '@clr/angular';
import { PollComponent } from './shared/components/poll/poll.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { PollDetailsComponent } from './shared/components/poll-details/poll-details.component';
import { PollDetailsComponent02 } from './shared/components/poll-details-02/poll-details-02.component';
import { PollDetailsComponent03 } from './shared/components/poll-details-03/poll-details-03.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PollComponent,
    HomeComponent,
    LoginComponent,
    PollDetailsComponent,
    PollDetailsComponent02,
    PollDetailsComponent03,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    CommonModule,
    // PieChartModule
  ],
  exports: [
    // PieChartModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

