import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { EventBoxComponent } from "../../component/event-box/event-box.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  declarations: []
})
export class DashboardModule {}
