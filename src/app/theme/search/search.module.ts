import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchNewComponent } from "./search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { ListProfileComponent } from '../Dashboard/search/list-profile/list-profile.component';
import { ToastyModule } from "ng2-toasty";

import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: SearchNewComponent,
    pathMatch: "full"
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    SearchNewComponent //ListProfileComponent
  ]
})
export class SearchNewModule {}
