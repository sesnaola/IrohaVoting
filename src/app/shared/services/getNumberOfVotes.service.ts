import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class GetNumberOfVotes {

    private baseUrl = environment.baseUrl;
    public data: any;

    constructor(private http: HttpClient) { }

    getParty01(irohaUser: string, irohaDomain: string, party01Name: string, domain: string) {
        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaUser = emailObject[0]
        irohaDomain = emailObject[1]

        return this.http.get(this.baseUrl + `/get_account_assets/${irohaUser}/${irohaDomain}/${party01Name}/${domain}/`);
    }

    getParty02(irohaUser: string, irohaDomain: string, party02Name: string, domain: string) {
        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaUser = emailObject[0]
        irohaDomain = emailObject[1]

        return this.http.get(this.baseUrl + `/get_account_assets/${irohaUser}/${irohaDomain}/${party02Name}/${domain}/`);
    }

    getUser(irohaUser: string, irohaDomain: string, name: string, domain: string) {
        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaUser = emailObject[0]
        irohaDomain = emailObject[1]

        return this.http.get(this.baseUrl + `/get_account_assets/${irohaUser}/${irohaDomain}/${name}/${domain}/`);
    }
}
