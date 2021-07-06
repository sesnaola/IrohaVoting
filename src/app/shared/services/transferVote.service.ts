import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class TransferVote {

    private baseUrl = environment.baseUrl;
    public data: any;

    constructor(private http: HttpClient) { }

    addVote(irohaUser: string, irohaDomain: string, user01name: string, user01domain: string, user02name: string, user02domain: string, assetName: string, assetDomain: string, amount: number) {
        console.log("Trying to transfer Vote");

        var email = localStorage.getItem("email");
        var emailObject = email.split("@");
        irohaUser = emailObject[0]
        irohaDomain = emailObject[1]

        console.log("TCL: TransferVote -> addVote -> this.baseUrl + `/transfer_vote_from_admin_to_user/${user01name}/${user01domain}/${user02name}/${user02domain}/${assetName}/${assetDomain}/${amount}`", this.baseUrl + `/transfer_vote_from_admin_to_user/${user01name}/${user01domain}/${user02name}/${user02domain}/${assetName}/${assetDomain}/${amount}`)
        return this.http.get(this.baseUrl + `/transfer_vote_from_admin_to_user/${irohaUser}/${irohaDomain}/${user01name}/${user01domain}/${user02name}/${user02domain}/${assetName}/${assetDomain}/${amount}`);
    }
}
