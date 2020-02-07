import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Parse } from "parse";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.userIsLoggedIn()) {
      this.router.navigate(["auth/login/simple"]);
      return false;
    } else {
      /* if (Parse.User.current().get("isActivate")) {
        //this.router.navigate(["inbox"]);
        return true;
      } else {
        this.router.navigate(["auth/login/simple"]);
        return false;
      } */
      return true;
    }
  }
}
