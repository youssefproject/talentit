import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventComponent } from "./event.component";


const routes: Routes = [
  {
    path: "",
    component: EventComponent,
    data: {
      title: "Event",
      icon: "ti-event",
      caption: "lorem ipsum dolor sit amet, consectetur adipisicing elit",
      status: false
    }
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}
