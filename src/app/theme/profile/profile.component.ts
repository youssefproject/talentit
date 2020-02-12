import { Component, OnInit } from '@angular/core';
import { ParseService } from "../../services/parse.service";
import { Parse } from "parse";
import { NgForm } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  theUser: Parse.User;
  isGuest: boolean = false;
  scrollHandlerBind = this.scrollHandler.bind(this);
  router: Router;
  actualRoute: string = "";
  userB: string;
  idProfile: string = "";
  userProfile: any;
  loading: boolean = false;
  constructor(
    private parseService: ParseService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router = _router;
    var tab = this.router.url.split("/");
    console.log(tab, tab.length);
    if (tab.length == 4) this.actualRoute = tab[3];
    console.log(tab.length);
    if (this.activatedRoute.snapshot.params.idProfile != undefined) {
      this.idProfile = this.activatedRoute.snapshot.params.idProfile;
      console.log(this.idProfile)
      this.parseService.getProfileUser(this.idProfile).then(profile => {
        this.theUser = profile;
        if (this.theUser.get("isGuest")) this.isGuest = true;
        this.loading = true;
      });
    }


    //this.theUser = Parse.User.current();
    //console.log(this.theUser);
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

  scrollHandler() {

    if (this.loading) {

      var marginTop = -129;
      var alpha =
        $(window).scrollTop() / ($(".pcoded-wrapper").offset().top - 90);
      var alpha2 =
        $(window).scrollTop() / ($(".pcoded-wrapper").offset().top - 140);

      $(".conversation-box-booking").css("margin-top", marginTop * (1 - alpha));
      $(".conversation-see-profile").css("opacity", 1 - alpha2);
      $(".conversation-full-content").css("opacity", 1 - alpha2);
      // console.log(
      //   "alpha2 ",
      //   $(window).scrollTop(),
      //   " / ",
      //   $(".pcoded-wrapper").offset().top - 90
      // );
      if ($(window).scrollTop() > $(".pcoded-wrapper").offset().top - 90) {
        //$(".conversation-box-book").css("position", "fixed");
        this.changeColor(false);
      } else {
        // $(".conversation-box-book").css("position", "inherit");
        this.changeColor(true);
      }
    }
  }
  ngAfterViewInit() {

    $(".conversation-see-profile").css({
      top: $(window).height() * 0.65 - 150,
      //left: $(".conversation-box-booking").offset().left
    });
  }
  ngOnInit() {
    this.changeColor(true);
    //$(".conversation-box-booking").offset().top - 150

    //alert($(".conversation-box-booking").offset().left);
    /* $(window).scroll(() => {
      alert("jj")
      this.scrollHandler();
    }); */
    window.addEventListener("scroll", this.scrollHandlerBind);

    // if (this.theUser.get("isGuest")) this.isGuest = true;
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollHandlerBind);
    //this.inConversationView = false;
    this.changeColor(false);
  }


}
