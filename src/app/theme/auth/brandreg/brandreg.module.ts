import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {SharedModule} from '../../../shared/shared.module';
import{ BrandregComponent } from './brandreg.component';
import { BrandregRoutingModule } from './brandreg-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  imports: [
    CommonModule,
    BrandregRoutingModule,
    //SharedModule
    FormsModule, ReactiveFormsModule,
    //BrowserModule
  ],
  declarations: [BrandregComponent]
})
export class BrandregModule { }
