import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InboxComponent } from "./inbox.component";
import { RouterModule, Routes } from "@angular/router";
import { EventBoxComponent } from "../../component/event-box/event-box.component";
import { SharedModule } from "../../shared/shared.module";
import { TimeAgoPipe } from "time-ago-pipe";
const routes: Routes = [
  {
    path: "",
    component: InboxComponent,
    pathMatch: "full"
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [InboxComponent, TimeAgoPipe]
})
export class InboxModule {}
