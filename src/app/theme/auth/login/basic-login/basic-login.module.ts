import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicLoginComponent } from "./basic-login.component";
import { BasicLoginRoutingModule } from "./basic-login-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ToastyModule} from 'ng2-toasty';
@NgModule({
  imports: [CommonModule, BasicLoginRoutingModule, SharedModule, FormsModule,ReactiveFormsModule,ToastyModule.forRoot()],
  declarations: [BasicLoginComponent]
})
export class BasicLoginModule {}
