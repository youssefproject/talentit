import { ConversationComponent } from "./conversation/conversation.component";
import { EditComponent } from "./edit/edit.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EventBoxComponent } from "../../component/event-box/event-box.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: ConversationComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ConversationComponent, EditComponent]
})
export class EventsModule {}
