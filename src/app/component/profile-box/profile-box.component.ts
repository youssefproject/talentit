import { Component, Input } from "@angular/core";
import { Parse } from "parse";
import { SearchNewComponent } from "../../theme/search/search.component";
import { Router, CanActivate } from "@angular/router";
@Component({
  selector: "app-profile-box",
  templateUrl: "./profile-box.component.html",
  styleUrls: ["./profile-box.component.scss"]
})
export class ProfileBoxComponent {
  @Input() name: string;
  @Input() image: string;
  @Input() adresse: string;
  @Input() eventId: string;
  @Input() TIuserId: string;
  @Input() userId: string;

  @Input() searchComponent: SearchNewComponent;

  constructor(public router: Router) {}

  reserver() {
    var thos = this;
    // Parse.Cloud.run("newConversation", {
    //   TIUserB: this.TIuserId,
    //   userB: this.userId,
    //   eventId: this.eventId
    // }).then(
    //   function(result) {
    //     // make sure the set the email sent flag on the object
    //     console.log("la")
    //     console.log("result :" + JSON.stringify(result));
    //     if (result != "false") {
    //       thos.searchComponent.toastSuccess();
    //     } else {
    //       thos.searchComponent.toastError();
    //     }
    //   },
    //   function(error) {
    //     // error
    //     alert("Message non envoyé " + error);
    //   }
    // );

    this.router.navigate([`profile/${this.userId}`]);
  }
}
