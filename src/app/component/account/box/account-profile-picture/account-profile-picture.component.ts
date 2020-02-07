import { Component, OnInit, Input } from "@angular/core";
import { Parse } from "parse";
@Component({
  selector: "app-account-profile-picture",
  templateUrl: "./account-profile-picture.component.html",
  styleUrls: ["./account-profile-picture.component.scss"]
})
export class AccountProfilePictureComponent implements OnInit {
  theUser = Parse.User.current();
  constructor() {}

  ngOnInit() {}
}
