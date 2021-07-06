import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  goLogin() {
    if (!this.auth.isLoggedIn()) { this.router.navigate(["/login"]); }
    if (this.auth.isLoggedIn()) { this.router.navigate(["/poll"]); }
  }
}
