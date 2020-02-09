import { Component, OnInit } from "@angular/core";
import { Parse } from "parse";
import { Router } from "@angular/router";
import { ParseService } from "../../../services/parse.service";
@Component({
  selector: "app-waiting",
  templateUrl: "./waiting.component.html",
  styleUrls: ["./waiting.component.scss"]
})
export class WaitingComponent implements OnInit {
  constructor(private router: Router, private parseService: ParseService) {
    if (Parse.User.current().get("isActivate")) {
      this.router.navigate(["home"]);
    } else {
      Parse.User.current()
        .fetch()
        .then(result => {
          if (Parse.User.current().get("isActivate")) {
            this.router.navigate(["home"]);
          } else {
            if (Parse.User.current().get("profileFilled")) {
              this.router.navigate(["auth/waiting"]);
            } else {
              if (Parse.User.current().get("isGuest")) {
                this.router.navigate(["auth/profile/presta"]);
              } else {
                this.router.navigate(["auth/profile/brand"]);
              }
            }

            return false;
          }
        });
    }
  }

  ngOnInit() {}
}
