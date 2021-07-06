import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class AddNewVote {

    private baseUrl = environment.baseUrl;
    public data: any;

    constructor(private http: HttpClient) { }

    addAsset(irohaName: string, irohaDomain: string, assetName: string, assetDomain: string, precision: number) {

        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaName = emailObject[0]
        irohaDomain = emailObject[1]

        return this.http.get(this.baseUrl + `/add_asset/${irohaName}/${irohaDomain}/${assetName}/${assetDomain}/${precision}`);
    }
}
