import { Component, OnInit } from '@angular/core';
import '@clr/icons/shapes/all-shapes';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  goHome() {
    if (this.router.url == "/login") {
      this.router.navigate(["/home"]);
    } else {
      this.router.navigate(["/poll"]);
    }
  }

}


