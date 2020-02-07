import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { ChartModule } from "angular2-chartjs";
import { SimpleNotificationsModule } from "angular2-notifications";
import { ToastyModule } from "ng2-toasty";
import { ToShortDatePipe } from "../../../pipes/to-short-date.pipe";
import { EventBoxComponent } from "../../../component/event-box/event-box.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChartModule,
    SimpleNotificationsModule.forRoot(),
    ToastyModule.forRoot()
  ],
  declarations: [HomeComponent, ToShortDatePipe, EventBoxComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
