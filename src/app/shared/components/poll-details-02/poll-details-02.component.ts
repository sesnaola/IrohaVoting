import { Component, OnInit } from '@angular/core';
import { getAsset } from '../../models/getAsset.model';
import { GetNumberOfVotes } from '../../services/getNumberOfVotes.service';
import { TransferVote } from '../../services/transferVote.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details-02.component.html',
})
export class PollDetailsComponent02 implements OnInit {

  pollTitle = "examplepoll02";
  party = "this"
  public data: getAsset;
  assetInfo: getAsset;
  getAsset: any;
  getAssetParty01: any;
  getAssetParty02: any;
  getAssetUser: any;
  disabled = false;
  party01Name = "party01"
  party02Name = "party02"

  public pieChartType = 'pie';
  public pieChartData = [];
  public pieChartLabels = [];
  interval: any;

  constructor(
    private getNumberOfVotesService: GetNumberOfVotes,
    private transferVote: TransferVote, ) {

    // Count votes party 01
    var party01Name = "party01";
    var domain = "party";
    var email = localStorage.getItem("email");
    var emailObject = email.split("@");
    var irohaName = emailObject[0];
    var irohaDomain = emailObject[1];
    this.pieChartLabels[0] = this.party01Name;

    this.getNumberOfVotesService.getParty01(irohaName, irohaDomain, party01Name, domain).subscribe(result => {
      this.getAssetParty01 = result
      var amount = this.getAssetParty01.split('"');
      for (let i = 0; i < amount.length; i++) {
        if (amount[i].includes(this.pollTitle + "#test")) {
          this.getAssetParty01 = parseInt(amount[i + 4]);
          this.pieChartData[0] = this.getAssetParty01;
          return this.getAssetParty01;
        } else {
          this.getAssetParty01 = 0;
        }
      }
    })

    // Count votes party 02
    var party01Name = "party02";
    var domain = "party";
    var email = localStorage.getItem("email");
    var emailObject = email.split("@");
    var irohaName = emailObject[0]
    var irohaDomain = emailObject[1]
    this.pieChartLabels[1] = this.party02Name;

    this.getNumberOfVotesService.getParty02(irohaName, irohaDomain, party01Name, domain).subscribe(result => {
      this.getAssetParty02 = result
      var amount = this.getAssetParty02.split('"');
      for (let i = 0; i < amount.length; i++) {
        if (amount[i].includes(this.pollTitle)) {
          this.getAssetParty02 = parseInt(amount[i + 4]);
          this.pieChartData[1] = this.getAssetParty02;
          return this.getAssetParty02;
        } else {
          this.getAssetParty02 = 0;
        }
      }
    })


  }

  ngOnInit() {
  }

  voteParty01(irohaName, irohaDomain, user01name, user01domain, user02name, user02domain, assetName, assetDomain, amount) {
    console.log("enter transferVoteFromAdminToUser");

    var email = localStorage.getItem("email");
    var emailObject = email.split("@");

    irohaName = emailObject[0]
    irohaDomain = emailObject[1]
    user01name = emailObject[0]
    user01domain = emailObject[1]
    user02name = "party01"
    user02domain = "party"
    assetName = this.pollTitle
    assetDomain = "test"
    amount = 1;
    this.transferVote.addVote(irohaName, irohaDomain, user01name, user01domain, user02name, user02domain, assetName, assetDomain, amount).subscribe();
    this.setTimer();
  }

  voteParty02(irohaName, irohaDomain, user01name, user01domain, user02name, user02domain, assetName, assetDomain, amount) {
    console.log("enter transferVoteFromAdminToUser");

    var email = localStorage.getItem("email");
    var emailObject = email.split("@");

    irohaName = emailObject[0]
    irohaDomain = emailObject[1]
    user01name = emailObject[0]
    user01domain = emailObject[1]
    user02name = "party02"
    user02domain = "party"
    assetName = this.pollTitle
    assetDomain = "test"
    amount = 1;
    this.transferVote.addVote(irohaName, irohaDomain, user01name, user01domain, user02name, user02domain, assetName, assetDomain, amount).subscribe();
    this.setTimer();
  }


  setTimer() {
    this.interval = setInterval(() => {
      window.location.reload();
    }, 3500);
  }

}
