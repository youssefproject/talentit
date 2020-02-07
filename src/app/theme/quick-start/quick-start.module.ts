import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuickStartComponent } from "./quick-start.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToastyModule } from "ng2-toasty";
import { BrowserModule } from "@angular/platform-browser";
import { ColorPickerModule } from "ngx-color-picker";
const routes: Routes = [
  {
    path: "",
    component: QuickStartComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  declarations: [QuickStartComponent]
})
export class QuickStartModule {}
