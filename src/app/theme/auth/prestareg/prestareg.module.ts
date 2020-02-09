import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestaregComponent } from './prestareg.component';
import { PrestaregRoutingModule } from './prestareg-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PrestaregRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [PrestaregComponent]
})
export class PrestaregModule { }
