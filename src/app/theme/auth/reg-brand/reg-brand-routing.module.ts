import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegBrandComponent } from './reg-brand.component';

const routes: Routes = [
  {
    path: '',
    component: RegBrandComponent,
    data: {
      title: 'RegBrand'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegBrandRoutingModule { }
