import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ BrandregComponent } from './brandreg.component';
const routes: Routes = [
  {
    path: '',
    component: BrandregComponent,
    data: {
      title: 'brand'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandregRoutingModule { }
