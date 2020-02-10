import { Component, OnInit } from "@angular/core";
import { ParseService } from "../../services/parse.service";
import { Parse } from "parse";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.scss"]
})
export class InboxComponent implements OnInit {
  isGuest: boolean = false;
  conversations = [];
  eventId: string;
  idE: string = "";
  actualRoute: string = "";
  theEvent: any;
  constructor(
    private parseService: ParseService,
    private _router: Router,
    private actRoute: ActivatedRoute
  ) {
    var tab = _router.url.split("/");
    console.log("tab ", tab);
    if (tab.length == 3) this.actualRoute = tab[1];

    if (this.actRoute.snapshot.params.idE != undefined) {
      this.idE = this.actRoute.snapshot.params.idE;
    }
    console.log("ide ", this.idE);
    var tab = _router.url.split("/");
    if (tab.length > 3) this.eventId = tab[2];

    if (Parse.User.current().get("isGuest")) {
      this.isGuest = true;
    }

    this.parseService.getConversations(this.idE).then(result => {
      let theResults: Promise<any> = result;
      if (result.length == 0) {
        this.parseService.getEvent(this.idE).then(result => {
          this.theEvent = result.attributes;
        });
      }

      result.forEach(conversation => {
        let idConversation = conversation.id;
        let createdAt = conversation.createdAt;
        conversation = Object.assign(
          { selected: false },
          conversation.attributes
        );
        conversation.id = idConversation;
        conversation.createdAt = createdAt;
        console.log(conversation.event.id);
        conversation.eventId = conversation.event.id;
        conversation.event = conversation.event.attributes;
        this.theEvent = conversation.event;
        console.log("conversation.event ", conversation);
        console.log(Parse.User.current().get("isGuest"));
        if (Parse.User.current().get("isGuest")) {
          conversation.TIuserB=null;
          //conversation.TIuserB.name=null;
          //conversation.TIuserB.avatar=null;
          console.log(conversation)
          console.log(conversation.userB);
          console.log(conversation.userB.attributes.firstName);
          //conversation.TIuserB.name = conversation.userB.attributes.firstName;
          //conversation.TIuserB.avatar = conversation.userB.attributes.avatar;
        } else {
          console.log(conversation)
          console.log(conversation.TIuserB)
          //conversation.T1userB.avatar=conversation.userB.attributes.avatar;

          //conversation.TIuserB = conversation.TIuserB.attributes;
        }
        if (conversation.status == 0) {
          conversation.status = "En attente";
        }else if(conversation.status == 1){
          conversation.status = "accepté";
        }
        this.conversations.push(conversation);
      });
      /* for (let i = 0; i < result.length; i++) {
        let object = result[i];
        let theEvent: Event = new Event();
        theEvent = this.parseFunction.getEvent(object);
        this.events.push(theEvent);
        //this.eventObservable.push(theEvent);
      } */
    });
  }

  ngOnInit() {}
  isUserGuest(){
    console.log(Parse.User.current().get("isGuest"));
    return Parse.User.current().get("isGuest");
  
  }
}

