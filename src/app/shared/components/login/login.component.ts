import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService, TokenPayload } from '../../services/authentication.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    credentials: TokenPayload = {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    constructor(private auth: AuthenticationService, private router: Router) { }

    login() {
        this.auth.saveUserName(this.credentials.email);
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/poll')
            },
            err => {
                console.error(err)
            }
        )
    }
}