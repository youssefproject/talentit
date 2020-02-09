import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Parse } from "parse";
@Injectable()
export class ActivateGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (Parse.User.current().get("isActivate")) {
      return true;
    } else {
      Parse.User.current()
        .fetch()
        .then(result => {
          console.log("isActivate ", Parse.User.current().get("isActivate"));
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
}
