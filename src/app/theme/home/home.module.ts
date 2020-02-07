import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../shared/shared.module";
import { ChartModule } from "angular2-chartjs";
import { SimpleNotificationsModule } from "angular2-notifications";
import { ToastyModule } from "ng2-toasty";
import { ToShortDatePipe } from "../../pipes/to-short-date.pipe";
import { AuthGuardService } from "../../services/auth.guard";
import { Routes, RouterModule } from "@angular/router";
import { EventBoxComponent } from "../../component/event-box/event-box.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    SimpleNotificationsModule.forRoot(),
    ToastyModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, ToShortDatePipe],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
