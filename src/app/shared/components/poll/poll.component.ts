import { Component, OnInit } from '@angular/core';
import { getAsset } from '../../models/getAsset.model';
import { GetNumberOfVotes } from '../../services/getNumberOfVotes.service';
import { AddNewVote } from '../../services/addNewVote.service';
import { AddVoteToUser } from '../../services/addVoteToUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: []
})
export class PollComponent implements OnInit {

  pollTitle = "examplepoll01";
  pollTitle02 = "examplepoll02";
  pollTitle03 = "examplepoll03";
  pollDescription = "Vote here!"
  party = "this"
  public data: getAsset;
  assetInfo: getAsset;
  getAsset: any;
  getAssetParty01: any;
  getAssetParty02: any;
  getAssetUser: any;
  disabledPoll01 = false;
  disabledPoll02 = false;
  disabledPoll03 = false;

  constructor(
    private getNumberOfVotesService: GetNumberOfVotes,
    private addNewVote: AddNewVote,
    private addVoteToUserService: AddVoteToUser,
    private router: Router,
  ) {

    /////////////////////////////////////////////////////////////////////////////////////////
    // // Count votes party 01
    // var party01Name = "party01";
    // var domain = "party";
    // var email = localStorage.getItem("email");
    // var emailObject = email.split("@");
    // var irohaName = emailObject[0]
    // var irohaDomain = emailObject[1]

    // this.getNumberOfVotesService.getParty01(irohaName, irohaDomain, party01Name, domain).subscribe(result => {
    //   this.getAssetParty01 = result
    //   var amount = this.getAssetParty01.split('"');
    //   for (let i = 0; i < amount.length; i++) {
    //     if (amount[i].includes(this.pollTitle)) {
    //       this.getAssetParty01 = parseInt(amount[i + 4]);
    //       return this.getAssetParty01;
    //     } else {
    //       this.getAssetParty01 = 0;
    //     }
    //   }
    // })


    // // Count votes party 02
    // var party02Name = "party02";
    // var domain = "party";
    // var email = localStorage.getItem("email");
    // var emailObject = email.split("@");
    // var irohaName = emailObject[0]
    // var irohaDomain = emailObject[1]

    // this.getNumberOfVotesService.getParty02(irohaName, irohaDomain, party02Name, domain).subscribe(result => {
    //   this.getAssetParty02 = result
    //   var amount = this.getAssetParty02.split('"');
    //   for (let i = 0; i < amount.length; i++) {
    //     if (amount[i] === this.pollTitle) {
    //       this.getAssetParty02 = parseInt(amount[i + 4]);
    //       return this.getAssetParty02;
    //     } else {
    //       this.getAssetParty02 = 0;
    //     }
    //   }
    // })
    /////////////////////////////////////////////////////////////////////////////////////////

    // Allow user to take vote
    var email = localStorage.getItem("email");
    var emailObject = email.split("@");
    var name = emailObject[0]
    var domain = emailObject[1]

    this.getNumberOfVotesService.getUser(name, domain, name, domain).subscribe(result => {
      this.getAssetUser = result
      var amount = this.getAssetUser.split('"');
      for (let i = 0; i < amount.length; i++) {
        if (amount[i].includes(this.pollTitle + "#test")) {
          this.disabledPoll01 = true;
        }
      }
    })

    var email = localStorage.getItem("email");
    var emailObject = email.split("@");
    var name = emailObject[0]
    var domain = emailObject[1]

    this.getNumberOfVotesService.getUser(name, domain, name, domain).subscribe(result => {
      this.getAssetUser = result
      var amount = this.getAssetUser.split('"');
      for (let i = 0; i < amount.length; i++) {
        if (amount[i].includes(this.pollTitle02 + "#test")) {
          this.disabledPoll02 = true;
        }
      }
    })


    var email = localStorage.getItem("email");
    var emailObject = email.split("@");
    var name = emailObject[0]
    var domain = emailObject[1]

    this.getNumberOfVotesService.getUser(name, domain, name, domain).subscribe(result => {
      this.getAssetUser = result
      var amount = this.getAssetUser.split('"');
      for (let i = 0; i < amount.length; i++) {
        if (amount[i].includes(this.pollTitle03 + "#test")) {
          this.disabledPoll03 = true;
        }
      }
    })


  }

  ngOnInit() {
  }

  subscribePoll(irohaName, irohaDomain, assetName, assetDomain, precision, amount) {
    console.log("Enter Subscribe Poll");

    this.addNewVoteType(irohaName, irohaDomain, assetName, assetDomain, precision);
    this.addVoteToUser(irohaName, irohaDomain, assetName, assetDomain, amount);
    this.disableButtonPoll01();
  }

  subscribePoll02(irohaName, irohaDomain, assetName, assetDomain, precision, amount) {
    console.log("Enter Subscribe Poll");

    this.addNewVoteType02(irohaName, irohaDomain, assetName, assetDomain, precision);
    this.addVoteToUser02(irohaName, irohaDomain, assetName, assetDomain, amount);
    this.disableButtonPoll02();
  }

  subscribePoll03(irohaName, irohaDomain, assetName, assetDomain, precision, amount) {
    console.log("Enter Subscribe Poll");

    this.addNewVoteType03(irohaName, irohaDomain, assetName, assetDomain, precision);
    this.addVoteToUser03(irohaName, irohaDomain, assetName, assetDomain, amount);
    this.disableButtonPoll03();
  }

  disableButtonPoll01() {
    this.disabledPoll01 = true;
  }

  disableButtonPoll02() {
    this.disabledPoll02 = true;
  }

  disableButtonPoll03() {
    this.disabledPoll03 = true;
  }

  // POLL 01
  addNewVoteType(irohaName, irohaDomain, assetName, assetDomain, precision) {
    console.log("Enter addNewVoteType");

    assetName = this.pollTitle;
    assetDomain = "test";
    precision = 1;
    this.addNewVote.addAsset(irohaName, irohaDomain, assetName, assetDomain, precision).subscribe();
  }

  addVoteToUser(irohaName, irohaDomain, assetName, assetDomain, amount) {
    console.log("enter addTemporalVoteToUser");

    assetName = this.pollTitle;
    assetDomain = "test";
    amount = 1; +
      this.addVoteToUserService.addVote(irohaName, irohaDomain, assetName, assetDomain, amount).subscribe();
  }
  // POLL 02
  addNewVoteType02(irohaName, irohaDomain, assetName, assetDomain, precision) {
    console.log("Enter addNewVoteType");

    assetName = this.pollTitle02;
    assetDomain = "test";
    precision = 1;
    this.addNewVote.addAsset(irohaName, irohaDomain, assetName, assetDomain, precision).subscribe();
  }

  addVoteToUser02(irohaName, irohaDomain, assetName, assetDomain, amount) {
    console.log("enter addTemporalVoteToUser");

    assetName = this.pollTitle02;
    assetDomain = "test";
    amount = 1; +
      this.addVoteToUserService.addVote(irohaName, irohaDomain, assetName, assetDomain, amount).subscribe();
  }

  // POLL 03
  addNewVoteType03(irohaName, irohaDomain, assetName, assetDomain, precision) {
    console.log("Enter addNewVoteType");

    assetName = this.pollTitle03;
    assetDomain = "test";
    precision = 1;
    this.addNewVote.addAsset(irohaName, irohaDomain, assetName, assetDomain, precision).subscribe();
  }

  addVoteToUser03(irohaName, irohaDomain, assetName, assetDomain, amount) {
    console.log("enter addTemporalVoteToUser");

    assetName = this.pollTitle03;
    assetDomain = "test";
    amount = 1; +
      this.addVoteToUserService.addVote(irohaName, irohaDomain, assetName, assetDomain, amount).subscribe();
  }

  examplepoll01URL() {
    this.router.navigate(["poll-details/01"]);
  }
  examplepoll02URL() {
    this.router.navigate(["poll-details/02"]);
  }
  examplepoll03URL() {
    this.router.navigate(["poll-details/03"]);
  }
}
