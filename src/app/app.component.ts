import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IrohaVoting';

  constructor(public router: Router) { }

  isHomeComponent(): boolean {
    return this.router.url !== '/home';
  }
}
