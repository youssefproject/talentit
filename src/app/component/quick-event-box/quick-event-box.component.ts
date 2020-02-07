import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quick-event-box",
  templateUrl: "./quick-event-box.component.html",
  styleUrls: ["./quick-event-box.component.scss"]
})
export class QuickEventBoxComponent {
  @Input() eventName: string;
  @Input() eventPlace: string;
  constructor() {}
}
