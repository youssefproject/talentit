import { Component, OnInit, HostBinding } from "@angular/core";
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "menu-profile",
  templateUrl: "./menu-profile.component.html",
  styleUrls: ["./menu-profile.component.scss"],
  animations: [
    trigger("notificationBottom", [
      state(
        "an-off, void",
        style({
          overflow: "hidden",
          height: "0px"
        })
      ),
      state(
        "an-animate",
        style({
          overflow: "hidden",
          height: AUTO_STYLE
        })
      ),
      transition("an-off <=> an-animate", [animate("400ms ease-in-out")])
    ]),
    trigger("slideInOut", [
      state(
        "in",
        style({
          width: "300px"
          // transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        "out",
        style({
          width: "0"
          // transform: 'translate3d(100%, 0, 0)'
        })
      ),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ]),
    trigger("mobileHeaderNavRight", [
      state(
        "nav-off, void",
        style({
          overflow: "hidden",
          height: "0px"
        })
      ),
      state(
        "nav-on",
        style({
          height: AUTO_STYLE
        })
      ),
      transition("nav-off <=> nav-on", [animate("400ms ease-in-out")])
    ]),
    trigger("fadeInOutTranslate", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translate(0)" }),
        animate("400ms ease-in-out", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuProfileComponent implements OnInit {
  public profileNotification: string;
  public profileNotificationClass: string;

  constructor(private auth:AuthService,private router:Router) {
    this.profileNotification = "an-off";
  }
  logout(){
    this.auth.logout().subscribe(result => this.router.navigate(["auth/login/simple"]))
  }
  toggle() {
    this.profileNotification =
      this.profileNotification === "an-off" ? "an-animate" : "an-off";
    this.profileNotificationClass =
      this.profileNotification === "an-animate" ? "active" : "";

    /*if (
      this.profileNotification === "an-animate" &&
      this.innerChatSlideInOut === "in"
    ) {
      this.toggleInnerChat();
    }
    if (
      this.profileNotification === "an-animate" &&
      this.chatSlideInOut === "in"
    ) {
      this.toggleChat();
    }*/
  }

  notificationOutsideClick(ele: string) {
    /*if (ele === "live" && this.liveNotification === "an-animate") {
      this.toggleLiveNotification();
    } else */
    if (ele === "profile" && this.profileNotification === "an-animate") {
      this.toggle();
    }
  }

  ngOnInit() {}
}
