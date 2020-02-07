import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Parse } from "parse";
import { Router, RouterModule } from "@angular/router";

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';



declare var $: any;
declare var jQuery: any;

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.scss",
],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EditprofileComponent implements OnInit {
  theUser: any;
  scrollHandlerBind = this.scrollHandler.bind(this);
  router: Router;
  actualRoute: string = "";
  items = [];
  




  public activeDayIsOpen = true;
  refresh: Subject<any> = new Subject();





  scrollHandler() {
    var height = 220;
    var alpha1 = $(window).scrollTop() / 90;
    var alpha2 =
      $(window).scrollTop() / ($(".pcoded-wrapper").offset().top - 140);
    var val = 220 - $(window).scrollTop();
    if (val <= 130) {
      val = 130;
    }
    var scale = 1 + alpha2 / 3;
    //$(".editprofile-headerfull-back").css("height", val - 1 + "px");
    $(".editprofil-avatar").css("opacity", 1 - alpha2);
    $(".editprofil-avatar").css("transform", "scale(" + scale + ")");

    if ($(window).scrollTop() > $(".pcoded-wrapper").offset().top - 130) {
      $(".editprofile-line").css("position", "fixed");
      $(".editprofile-line").css("top", "130px");
      $(".editprofile-headerfull-back").css("position", "fixed");
      $(".editprofile-headerfull-back").css("top", "-90px");
    } else {
      $(".editprofile-line").css("position", "absolute");
      $(".editprofile-headerfull-back").css("position", "absolute");
      $(".editprofile-line").css("top", "inherit");
      $(".editprofile-headerfull-back").css("top", "inherit");
    }
  }

  changeColor(activate: boolean) {
    var oldSrc = "assets/images/logo@3x.png";
    var newSrc = "assets/images/logo_white@3x.png";
    if (activate) {
      $(".pcoded-header").css("background", "transparent");
      $(".nav-right li > a").css("color", "white");

      $('img[src="' + oldSrc + '"]').attr("src", newSrc);
    } else {
      var oldSrc = "assets/images/logo@3x.png";
      var newSrc = "assets/images/logo_white@3x.png";
      $('img[src="' + newSrc + '"]').attr("src", oldSrc);
      $(".pcoded-header").css("background", "white");
      $(".nav-right li > a").css("color", "");
    }
  }

  constructor(public _router: Router) {
    this.router = _router;
    var tab = this.router.url.split("/");
    if (tab.length == 4) this.actualRoute = tab[3];

    this.theUser = Parse.User.current();
  }

  ngOnInit() {
    this.changeColor(true);
    window.addEventListener("scroll", this.scrollHandlerBind);
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollHandlerBind);
    this.changeColor(false);
  }
}
