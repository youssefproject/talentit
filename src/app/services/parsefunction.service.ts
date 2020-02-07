import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Event } from "../models/event.model";
import { Guest } from "../models/guest.model";
import { Notification } from "../models/notification.model";
import { User } from "../models/user.model";
import {EventsConnect } from "../models/eventsconnect.model";

//const Parse = require('parse');
import { Parse } from "parse";

@Injectable()
export class ParseFunctionService {
  constructor() {}

  getNotification(theNotif: Parse.Object): Notification{
    var newNotif: Notification = new Notification();
    //newNotif.event = this.getEvent(theNotif.get("event"));
    newNotif.type = theNotif.get("type");
    newNotif.isRead = theNotif.get("isRead");
    newNotif.date = theNotif.get("date");
    newNotif.who = this.getUser(theNotif.get("who"));
    
    switch (newNotif.type) {
      case 1: newNotif.message=" a accepté de participer à l'évènement"; break;
      case 5: newNotif.message=" a accepté de rentrer en contact avec vous"; break;
      case 6: newNotif.message=" a essayé de vous joindre"; break;
      case 11: newNotif.message=" a refusé de participer à votre évènement"; break;
      case 12: newNotif.message=" vous a laissé un commentaire"; break;
    }
    return newNotif;
  }
  getUser(theUser:Parse.Object):User{
    var newUser: User = new User();
    newUser.name = theUser.get("name");
    newUser.avatar = theUser.get("avatar");
    return newUser;
  }

  fillEvent(
    theEvent: Parse.Object,
    name: string,
    type: string,
    theDate: string,
    start: string,
    end: string,
    place: string,
    desc: string
  ): Parse.Object {
    theEvent.set("name", name);
    theEvent.set("type", type);
    let newDate = new Date(theDate + "T12:00:00");
    theEvent.set("date", newDate);
    theEvent.set("start", start);
    theEvent.set("finish", end);
    theEvent.set("place", place);
    theEvent.set("description", desc);
    theEvent.set("user", Parse.User.current());
    return theEvent;
  }
  fillEventsConnect(
    theEventsConnect: Parse.Object,
    event: string,
    guest: string,
    type: number,
    
  ): Parse.Object {
    var eventPointer = {
      __type: 'Pointer',
      className: 'TIEvents',
      objectId: event
    }
    var guestPointer = {
      __type: 'Pointer',
      className: 'TIUser',
      objectId: guest
    }
    theEventsConnect.set("guest", guestPointer);
    theEventsConnect.set("event", eventPointer);
    theEventsConnect.set("name", name);
    theEventsConnect.set("type", type);
    theEventsConnect.set("isEnabled", true);
    theEventsConnect.set("user", Parse.User.current());
    return theEventsConnect;
  }
  getEvent(theEvent: Parse.Object): Event {
    var newEvent: Event = new Event();
    newEvent.id = theEvent.id;
    newEvent.name = theEvent.get("name");
    newEvent.place = theEvent.get("place");
    newEvent.start = theEvent.get("start");
    newEvent.finish = theEvent.get("finish");
    newEvent.description = theEvent.get("description");
    newEvent.type = theEvent.get("type");
    newEvent.theDate = theEvent.get("date");
    newEvent.guest = theEvent.get("guest");
    return newEvent;
  }
  getGuest(theGuest: Parse.Object): Guest {
    var newGuest: Guest = new Guest();
    newGuest.id = theGuest.id;
    newGuest.name = theGuest.get("name");
    newGuest.isMan = theGuest.get("isMan");
    newGuest.title = theGuest.get("title");
    newGuest.description = theGuest.get("description");
    newGuest.avatar = theGuest.get("avatar");
    newGuest.user = theGuest.get("guest");
    return newGuest;
  }
  getConnect(theConnect: Parse.Object): EventsConnect {
    var newConnect: EventsConnect = new EventsConnect();
    newConnect.id = theConnect.id;
    newConnect.event = this.getEvent(theConnect.get("event"));
    
    newConnect.guest = this.getGuest(theConnect.get("guest"));
    // console.log("bon "+newConnect.guest.avatar._url)
  
    newConnect.type = theConnect.get("type");
    return newConnect;
  }
}


