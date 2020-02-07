import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Parse } from "parse";
@Injectable()
export class BrandGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!Parse.User.current().get("isGuest")) {
      return true;
    } else {
      this.router.navigate(["home"]);
      return false;
    }
  }
}
