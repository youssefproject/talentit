import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import { ChoiceregRoutingModule } from './choicereg-routing.module';
import { ChoiceregComponent } from './choicereg.component';

@NgModule({
  imports: [
    CommonModule,
    ChoiceregRoutingModule,
    SharedModule
  ],
  declarations: [ChoiceregComponent]
})
export class ChoiceregModule { }
