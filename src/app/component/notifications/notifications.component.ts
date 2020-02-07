import { Component, OnInit } from "@angular/core";
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { NotificationService } from "../../services/notification.service";
import { Notification } from "../../models/notification.model";
import { ParseFunctionService } from "../../services/parsefunction.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
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
    ])
  ]
})
export class NotificationsComponent implements OnInit {
  public liveNotification: string;
  public liveNotificationClass: string;

  constructor(
    private notificationService: NotificationService,
    private parseFunction: ParseFunctionService
  ) {
    this.liveNotification = "an-off";
  }

  toggle() {
    this.liveNotification =
      this.liveNotification === "an-off" ? "an-animate" : "an-off";
    this.liveNotificationClass =
      this.liveNotification === "an-animate" ? "active" : "";
  }
  notificationOutsideClick(ele: string) {
    if (ele === "live" && this.liveNotification === "an-animate") {
      this.toggle();
    }
  }

  ngOnInit() {
    /*this.notificationService.startUpdate()
    .subscribe(message => {
      console.log(message);
    })*/
    this.getNotifications();
  }

  //GUESTCONNECT
  notifs = [];
  isLoadingNotification: boolean = false;
  getNotifications() {
    this.isLoadingNotification = false;
    this.notifs = [];
    this.notificationService.getNotifications().then(result => {
      this.isLoadingNotification = true;

      let theResults: Promise<any> = result;
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        let theNotif: Notification = object; //new Guest();
        theNotif = this.parseFunction.getNotification(object);
        this.notifs.push(theNotif);
      }
    });
  }
}
