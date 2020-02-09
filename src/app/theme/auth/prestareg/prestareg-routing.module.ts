import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PrestaregComponent } from './prestareg.component';
const routes: Routes = [
  {
    path: '',
    component: PrestaregComponent,
    data: {
      title: 'prestataire'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestaregRoutingModule { }
