import { Component, OnInit } from "@angular/core";
import { ParseService } from "../../services/parse.service";
import { Event } from "../../models/event.model";
import { Observable } from "rxjs/Observable";
import { ParseFunctionService } from "../../services/parsefunction.service";
import { Router } from "@angular/router";
import { Parse } from "parse";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  eventObservable = [];
  events: Event[] = [];
  usernameUser = "";
  theUser: Parse.User;
  isGuest: boolean = false;
  constructor(
    private parseService: ParseService,
    private parseFunction: ParseFunctionService,
    private router: Router
  ) {
    if (Parse.User.current().get("isGuest")) this.isGuest = true;

    this.parseService.getUsername().then(user => {
      console.log("theUser", user.get("avatar"));
      this.theUser = user;
      console.log(this.theUser.id);
    });
    this.parseService.getEvents().then(result => {
      let theResults: Promise<any> = result;

      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        let theEvent: Event = new Event();
        theEvent = this.parseFunction.getEvent(object);
        this.events.push(theEvent);
        //this.eventObservable.push(theEvent);
      }

      /* for(let event in theResults){
        let theEvent : Event
        theEvent.countryFR = event.get('countryFR');
        this.coursesObservable.push(theEvent);
      }*/
      //this.coursesObservable = result;
    });
  }

  ngOnInit() {}
  ok() {
    alert("yes");
  }
  goToSearch(event: string) {
    this.router.navigate(["dashboard/search"], {
      queryParams: { id: event }
    });
  }

  public feedbackData: any;
  public feedbackOption: any;

  ngAfterViewInit() {
    /* feedback chart start */
    this.feedbackData = {
      datasets: [
        {
          data: [83, 17],
          backgroundColor: ["#4099ff", "#81c1fd"],
          label: "Dataset 1",
          borderWidth: 0
        }
      ],
      labels: ["Positive", "Negative"]
    };

    this.feedbackOption = {
      responsive: true,
      legend: { display: false },
      title: { display: false, text: "Chart.js Doughnut Chart" },
      animation: { animateScale: true, animateRotate: true }
    };
    /* feedback chart end */
  }
}
