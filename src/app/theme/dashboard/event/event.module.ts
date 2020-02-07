import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventComponent } from "./event.component";
import { SharedModule } from "../../../shared/shared.module";
import { ChartModule } from "angular2-chartjs";
import { SimpleNotificationsModule } from "angular2-notifications";
import { ToastyModule } from "ng2-toasty";
import { EventRoutingModule } from "./event-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiSwitchModule } from "ng2-ui-switch";


@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    ChartModule,
    SimpleNotificationsModule.forRoot(),
    ToastyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule
  ],
  declarations: [EventComponent],
  bootstrap: [EventComponent]
})
export class EventModule {}
