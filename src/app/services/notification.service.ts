import { Injectable } from "@angular/core";
import { ParseService } from "./parse.service";
import { Observable } from "rxjs/Observable";
import { Parse } from "parse";
import { Notification } from "../models/notification.model";

//TYPE
//00 : [entreprise] vous invite [event]
//01 : [guest] a accepté  [event]
//02 : [entreprise] a modifié l'évènement  [event]
//03 : [guest] a accepté les changements de  [event]
//04 : [entreprise] souhaite rentrer en contact avec vous pour tel [event]
//05 : [guest] a accepté de rentrer en contact avec vous
//06 : [guest] a essayé de vous joindre
//07 : [entreprise] a essayé de vous joindre
//08 : [guest] a annulé la reservation
//09 : [guest] a annulé la réservation
//10 : [entreprise] a annulé la réservation
//10 : paiement accepté  [event]
//11 : [guest] a refusé  [event]
//12 : [guest] vous a laissé un commentaire
//13 : [entreprise] vous a laissé un commentaire

@Injectable()
export class NotificationService {
  private subscription;

  constructor(private parseSvc: ParseService) {
    //this.subscription = this.parseSvc.newsSubscriptionNotifications()
  }

  //LIVE----------------
  startUpdate(): Observable<string> {
    return new Observable(observer => {
      this.subscription.on("create", news => {
        /*let message = new Message()
        // TODO: it's not possible to get other user's info
        let user = news.get('user')
        let from = news.get('from')
        message.body = news.get('message')
        message.user = from != null ? from : 'Anonymous'
        message.me = user != null ? (user.id === this.parseSvc.currentUser.id) : false
        // console.log(message)*/
        let message = news.get("desc");
        observer.next(message);
      });
      // TODO: other events
      // this.subscription.on('update', (news) => {
      //   this.zone.run(()=> {
      //     this.title = news.get('message')
      //   })
      // })
    });
  }

  stopUpdate() {
    this.subscription.unsubscribe();
  }
  //---------------------

  public getNotifications(): Promise<any> {
    return new Promise((resolve, reject) => {
      const Notifications = Parse.Object.extend("TINotifications");
      let query = new Parse.Query(Notifications);
      query.equalTo("user", Parse.User.current());
      query.include("who");
      query.descending("date");
      //query.include('event');
      query.find().then(
        notif => {
          resolve(notif);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /*sendMessage(message: string) : Observable<boolean> {
    return this.parseSvc.sendMessage(message)
  }*/
}
