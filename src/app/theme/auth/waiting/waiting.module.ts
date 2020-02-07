import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WaitingRoutingModule } from "./waiting-routing.module";
import { WaitingComponent } from "./waiting.component";

@NgModule({
  imports: [CommonModule, WaitingRoutingModule],
  declarations: [WaitingComponent]
})
export class WaitingModule {}
