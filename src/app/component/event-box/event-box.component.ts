import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event-box",
  templateUrl: "./event-box.component.html",
  styleUrls: ["./event-box.component.scss"]
})
export class EventBoxComponent {
  @Input() eventName: string;
  @Input() eventPlace: string;

  constructor() {}
}
