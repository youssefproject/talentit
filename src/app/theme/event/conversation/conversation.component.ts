import { Component, OnInit } from "@angular/core";
import { ParseService } from "../../../services/parse.service";
import { Parse } from "parse";
import { NgForm } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";
declare var $: any;
declare var jQuery: any;

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"]
})
export class ConversationComponent implements OnInit {
  theUser: Parse.User;
  eventId: string;
  isGuest: boolean = false;
  scrollHandlerBind = this.scrollHandler.bind(this);
  messages = [];
  newMessage: string;
  userB: string;
  conversationId: string;
  constructor(
    private parseService: ParseService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log("isGuest ", this.isGuest);
    let idE = this.activatedRoute.snapshot.params.idE;

    this.theUser = Parse.User.current();

    this.parseService.getMessages(idE).then(result => {
      if (result && result.length > 0) {
        result.forEach(message => {
          let idMessage = message.id;
          message = Object.assign({ selected: false }, message.attributes);
          message.id = idMessage;
          message.conversationId = message.conversation.id;
          this.conversationId = message.conversationId;
          message.conversation = message.conversation.attributes;
          /* console.log("conversation.event ", conversation.eventId);
          conversation.TIuserB = conversation.TIuserB.attributes;
          if (conversation.status == 0) {
            conversation.status = "En attente";
          } */
          message.userAid = message.userA.id;
          message.userA = message.userA.attributes;

          message.userBid = message.userB.id;
          message.userB = message.userB.attributes;
          console.log("result ", message.userB);
          if (message.userAid == Parse.User.current().id) {
            message.me = 0;
          } else {
            message.me = 1;
            this.userB = message.userAid;
          }
          this.messages.push(message);
        });
      } else {
        //_router.navigate(["inbox"]);
      }
    });
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
  ngAfterViewInit() {
    $(".conversation-see-profile").css({
      top: $(window).height() * 0.65 - 150,
      left: $(".conversation-box-booking").offset().left
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
    //if (Parse.User.current().get("isGuest")) this.isGuest = true;
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollHandlerBind);
    //this.inConversationView = false;
    this.changeColor(false);
  }
  test() {
    if (this.newMessage == "" || this.newMessage == undefined) return;
    var message = {
      me: 0,
      message: this.newMessage,
      type: 0
    };
    this.messages.push(message);
    Parse.Cloud.run("newMessage", {
      userB: this.userB,
      conversationId: this.conversationId,
      message: this.newMessage
    }).then(
      function(result) {
        // make sure the set the email sent flag on the object
        //console.log("result :" + JSON.stringify(result));
      },
      function(error) {
        // error
        alert("Message non envoyé " + error);
      }
    );
    this.newMessage = "";
  }

  isUserBGuest(){
    console.log(Parse.User.current().get("isGuest"));
    return Parse.UserB.get("isGuest");
  
  }
}
