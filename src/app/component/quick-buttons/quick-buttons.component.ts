import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Parse } from "parse";
@Component({
  selector: "app-quick-buttons",
  templateUrl: "./quick-buttons.component.html",
  styleUrls: ["./quick-buttons.component.scss"]
})
export class QuickButtonsComponent implements OnInit {
  router: Router;
  isGuest: boolean = false;

  constructor(public _router: Router) {
    this.isGuest = Parse.User.current().get("isGuest");
    this.router = _router;
    console.log(this.router);
  }

  ngOnInit() {}
}
