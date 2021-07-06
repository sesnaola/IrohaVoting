import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class AddVoteToUser {

    private baseUrl = environment.baseUrl;
    public data: any;

    constructor(private http: HttpClient) { }

    addVote(irohaName: string, irohaDomain: string, assetName: string, assetDomain: string, amount: number) {
        console.log("Trying to addVote");

        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaName = emailObject[0]
        irohaDomain = emailObject[1]

        console.log("TCL: AddVoteToUser -> addVote -> this.baseUrl + `/add_vote_to_admin/${assetName}/${assetDomain}/${amount}`", this.baseUrl + `/add_vote_to_admin/${assetName}/${assetDomain}/${amount}`)
        return this.http.get(this.baseUrl + `/add_vote_to_admin/${irohaName}/${irohaDomain}/${assetName}/${assetDomain}/${amount}`);
    }
}
