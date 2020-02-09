import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Event } from "../models/event.model";
//const Parse = require('parse');
import { Parse } from "parse";
import { ParseFunctionService } from "./parsefunction.service";
import { environment } from "../../environments/environment";

@Injectable()
export class ParseService {
  event: Event = new Event();
  hasLoad: boolean = false;

  constructor(private parseFun: ParseFunctionService) {
    console.log("Parse initialized!");

    Parse.initialize(environment.parseID, environment.parseKEY);
    Parse.serverURL = environment.parseAPI;
    this.name = "test";
  }

  //-----------------------------------------------------------------------------------
  //-------------------------------NOTIFICATIONS----------------------------------------
  newsQuery; // TODO: type

  public newsSubscriptionNotifications() {
    if (!this.newsQuery) {
      this.newsQuery = new Parse.Query("TINotifications");
    }
    this.newsQuery.equalTo("user", Parse.User.current());
    return this.newsQuery.subscribe();
  }

  //------------------------------------------------------------------------------------
  //-----------------------------END NOTIFICATIONS--------------------------------------

  //-----------------------------------------------------------------------------------
  //-------------------------------EVENTCONNECT----------------------------------------
  public getEventsConnect(theEvent: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const EventConnect = Parse.Object.extend("TIEventsConnect");
        let query = new Parse.Query(EventConnect);
        //query.equalTo("user", Parse.User.current());
        var eventPointer = {
          __type: "Pointer",
          className: "TIEvents",
          objectId: theEvent
        };
        query.equalTo("event", eventPointer);
        query.equalTo("isEnabled", true);
        query.include(["event", "guest"]);
        query.find().then(
          eventsConnect => {
            console.log("getEventsConnect " + eventsConnect);
            resolve(eventsConnect);
          },
          error => {
            reject(error);
          }
        );
      }, 500);
    });
  }

  public addEventsConnect(
    event: string,
    guest: string,
    withInvitation: number
  ): Observable<any> {
    var EventsConnect = Parse.Object.extend("TIEventsConnect");
    var theEvent = new EventsConnect();
    theEvent = this.parseFun.fillEventsConnect(
      theEvent,
      event,
      guest,
      withInvitation
    );
    return new Observable(observer => {
      theEvent.save(null, {
        success: result => {
          observer.next(result);
          observer.complete();
        },
        error: error => {
          observer.error(error);
        }
      });
    });
  }

  public removeConnectsEvent(_id: string): Observable<any> {
    var Event = Parse.Object.extend("TIEventsConnect");
    var query = new Parse.Query(Event);
    query.equalTo("objectId", _id);
    let theService = this.parseFun;
    return new Observable(observer => {
      query.first({
        success: function(theEvent: Parse.Object) {
          theEvent.set("isEnabled", false);
          theEvent.save(null, {
            success: result => {
              observer.next(result);
              observer.complete();
            },
            error: error => {
              observer.error(error);
            }
          });
        },
        error: function(error) {
          observer.error("Error: " + error.code + " " + error.message);
        }
      });
    });
  }

  public changeStatusConnectsEvent(
    _id: string,
    status: number
  ): Observable<any> {
    var Event = Parse.Object.extend("TIEventsConnect");
    var query = new Parse.Query(Event);
    query.equalTo("objectId", _id);
    let theService = this.parseFun;
    return new Observable(observer => {
      query.first({
        success: function(theEvent: Parse.Object) {
          if (status == 1) {
            //envoyer notification
            theEvent.set("type", status);
          }
          theEvent.save(null, {
            success: result => {
              observer.next(result);
              observer.complete();
            },
            error: error => {
              observer.error(error);
            }
          });
        },
        error: function(error) {
          observer.error("Error: " + error.code + " " + error.message);
        }
      });
    });
  }

  //------------------------------------------------------------------------------------
  //-----------------------------END EVENTCONNECT---------------------------------------

  //-----------------------------------------------------------------------------------
  //------------------------------------GUEST------------------------------------------
  public getGuest(gender: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const Guest = Parse.Object.extend("TIUser");

      let query = new Parse.Query(Guest);
      if (gender == 1) {
        query.equalTo("isMan", false);
      } else if (gender == 2) {
        query.equalTo("isMan", true);
      }
      query.include("guest");
      //query.equalTo("user", Parse.User.current());
      query.find().then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  //------------------------------------------------------------------------------------
  //-----------------------------------END GUEST----------------------------------------

  //-----------------------------------------------------------------------------------
  //-----------------------------------EVENTS------------------------------------------

  public getEvents(): Promise<any> {
    console.log(this.hasLoad);
    if (!this.hasLoad) {
      this.hasLoad = true;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const Events = Parse.Object.extend("TIEvents");
        let query = new Parse.Query(Events);
        query.find().then(
          results => {
            resolve(results);
          },
          error => {
            reject(error);
          }
        );
      }, 500);
    });
  }

  public getEvent(_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const Event = Parse.Object.extend("TIEvents");
        let query = new Parse.Query(Event);
        query.equalTo("objectId", _id);
        query.first({
          success: function(theEvent: Parse.Object) {
            resolve(theEvent);
          },
          error: function(error) {
            reject(error);
          }
        });
      }, 500);
    });
  }

  public addEvent(
    name: string,
    type: string,
    date: string,
    start: string,
    end: string,
    place: string,
    desc: string
  ): Observable<any> {
    var Events = Parse.Object.extend("TIEvents");
    var theEvent = new Events();
    theEvent = this.parseFun.fillEvent(
      theEvent,
      name,
      type,
      date,
      start,
      end,
      place,
      desc
    );
    return new Observable(observer => {
      theEvent.save(null, {
        success: result => {
          observer.next(result);
          observer.complete();
        },
        error: error => {
          observer.error(error);
        }
      });
    });
  }

  public updateEvent(
    _id: string,
    name: string,
    type: string,
    date: string,
    start: string,
    end: string,
    place: string,
    desc: string
  ): Observable<any> {
    var Event = Parse.Object.extend("TIEvents");
    var query = new Parse.Query(Event);
    query.equalTo("objectId", _id);
    let theService = this.parseFun;
    return new Observable(observer => {
      query.first({
        success: function(theEvent: Parse.Object) {
          theEvent = theService.fillEvent(
            theEvent,
            name,
            type,
            date,
            start,
            end,
            place,
            desc
          );
          theEvent.save(null, {
            success: result => {
              observer.next(result);
              observer.complete();
            },
            error: error => {
              observer.error(error);
            }
          });
        },
        error: function(error) {
          observer.error("Error: " + error.code + " " + error.message);
        }
      });
    });
  }
  //-----------------------------------------------------------------------------------
  //-----------------------------------END EVENTS--------------------------------------

  //-----------------------------------------------------------------------------------
  //---------------------------------------USERS---------------------------------------
  public login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      Parse.User.logIn(email, password, {
        success: function(user) {
          observer.next(true);
        },
        error: function(user, error) {
          observer.error(error);
        }
      });
    });
  }

  public register(username: string, password: string, isGuest: boolean): Observable<boolean> {
    return new Observable(observer => {
      var user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      user.set("isActivate", false);
      user.set("isGuest", isGuest)
      // user.set("email", "email@example.com");
      user.signUp(null, {
        success: user => {
          observer.next(true);
          observer.complete();
        },
        error: (user, error) => {
          observer.error(error);
        }
      });
    });
  }

  public registerPresta(username: string, password: string, isMan: boolean, type : Number, firstName: string, lastName: string, brandadresse: string, social : string, tel: string): Observable<boolean> {
    return new Observable(observer => {
      var user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
     // user.set("email", username);
      user.set("isMan", isMan);
      user.set("isGuest", true);
      user.set("type", type);
      user.set("firstName", firstName);
      user.set("lastName", lastName);
      user.set("brandadresse", brandadresse);
      user.set("social", social);
      user.set("tel", tel);

      // user.set("email", "email@example.com");
      user.signUp(null, {
        success: user => {
          observer.next(true);
          observer.complete();
        },
        error: (user, error) => {
          console.log("lala");
          observer.error(error);
        }
      });
    });
  }

  public logout(): Observable<boolean> {
    return new Observable(observer => {
      // Parse.User.logOut().then(()=> observer.onNext(true))
      Parse.User.logOut().then(() => observer.next(true));
      this.name = "";
    });
  }

  public get currentUser() {
    return Parse.User.current();
  }
  name = "";
  theUser: Parse.User;

  public getUsername(): Promise<Parse.User> {
    this.name = "alors";
    var thos = this;
    if (this.theUser == undefined) {
      return new Promise((resolve, reject) => {
        var currentUser = Parse.User.current();

        resolve(currentUser);
        /*currentUser.fetch({
          success: function(user) {
            thos.theUser = user;
            var theName = user.get("firstName");
            thos.name = theName;
            resolve(user);
          }
        });*/
      });
    } else {
      return Promise.resolve(this.theUser);
    }
  }
  //-----------------------------------------------------------------------------------
  //-----------------------------------END USERS---------------------------------------

  //-----------------------------------------------------------------------------------
  //-----------------------------------CONVERSATION------------------------------------------

  public getConversations(idE): Promise<any> {
    return new Promise((resolve, reject) => {
      /*  var eventPointer = {
        __type: "Pointer",
        className: "TIEvents",
        objectId: eventId
      }; */

      let queryA = new Parse.Query("TIConversations");
      queryA.equalTo("userA", Parse.User.current());
      //queryA.equalTo("event", eventPointer);

      let queryB = new Parse.Query("TIConversations");
      queryB.equalTo("userB", Parse.User.current());
      //queryB.equalTo("event", eventPointer);

      let query = Parse.Query.or(queryA, queryB);
      if (idE) {
        var ptrEvent = {
          __type: "Pointer",
          className: "TIEvents",
          objectId: idE
        };
        query.equalTo("event", ptrEvent);
      }
      query.include("event");
      query.include("userA");
      query.include("TIuserB");
      query.find().then(
        results => {
          console.log("resultsconversation ", results);
          resolve(results);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  public getConversation(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query("TIConversations");
      query.equalTo("objectId", id);
      query.include("event");
      query.include("TIuserB");
      query.first({
        success: function(result) {
          resolve(result);
          // The object was refreshed successfully.
        },
        error: function(result, error) {
          // The object was not refreshed successfully.
          // error is a Parse.Error with an error code and message.
          reject(error);
        }
      });
    });
  }

  //-----------------------------------------------------------------------------------
  //----------------------------------END CONVERSATION---------------------------------

  //-----------------------------------------------------------------------------------
  //-----------------------------------MESSAGES----------------------------------------

  public getMessages(idConversation): Promise<any> {
    return new Promise((resolve, reject) => {
      var ptrConversation = {
        __type: "Pointer",
        className: "TIConversations",
        objectId: idConversation
      };

      let queryA = new Parse.Query("TIMessages");
      queryA.equalTo("userA", Parse.User.current());
      //queryA.equalTo("event", eventPointer);

      let queryB = new Parse.Query("TIMessages");
      queryB.equalTo("userB", Parse.User.current());
      //queryB.equalTo("event", eventPointer);

      let query = Parse.Query.or(queryA, queryB);
      query.include("conversation");
      query.include("conversation.event");
      query.include("userA");
      query.include("userB");
      query.equalTo("conversation", ptrConversation);
      query.find().then(
        results => {
          resolve(results);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  //-----------------------------------------------------------------------------------
  //----------------------------------END CONVERSATION---------------------------------
}
