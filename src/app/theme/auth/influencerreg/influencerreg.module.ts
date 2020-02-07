import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfluencerregComponent } from './influencerreg.component';
import { InfluencerregRoutingModule } from './influencerreg-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    InfluencerregRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [InfluencerregComponent]
})
export class InfluencerregModule { }
