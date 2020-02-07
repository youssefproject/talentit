import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WaitingComponent } from "./waiting.component";
const routes: Routes = [
  {
    path: "",
    component: WaitingComponent,
    data: {
      title: "Waiting"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitingRoutingModule {}
