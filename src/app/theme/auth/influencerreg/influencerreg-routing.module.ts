import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ InfluencerregComponent } from './influencerreg.component';
const routes: Routes = [
  {
    path: '',
    component: InfluencerregComponent,
    data: {
      title: 'Influencer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerregRoutingModule { }
