import { Component, OnInit } from '@angular/core';
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
   
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
    ])
  ]
})
export class MessagesComponent implements OnInit {
  public chatSlideInOut: string;
  public innerChatSlideInOut: string;

  constructor() { 
    this.chatSlideInOut = "out";
    this.innerChatSlideInOut = "out";
  }
  toggleChat() {
    this.chatSlideInOut = this.chatSlideInOut === "out" ? "in" : "out";
    if (this.innerChatSlideInOut === "in") {
      this.innerChatSlideInOut = "out";
    }
  }

  toggleInnerChat() {
    this.innerChatSlideInOut =
      this.innerChatSlideInOut === "out" ? "in" : "out";
  }

  ngOnInit() {
  }

}
