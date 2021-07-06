import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class AddVoteToAdmin {

    private baseUrl = environment.baseUrl;
    public data: any;

    constructor(private http: HttpClient) { }

    addVote(assetName: string, assetDomain: string, amount: number) {
        console.log("Trying to addVote");

        console.log("TCL: AddVoteToAdmin -> addVote -> this.baseUrl + `/add_vote_to_admin/${assetName}/${assetDomain}/${amount}`", this.baseUrl + `/add_vote_to_admin/${assetName}/${assetDomain}/${amount}`)
        return this.http.get(this.baseUrl + `/add_vote_to_admin/${assetName}/${assetDomain}/${amount}`);
    }
}
