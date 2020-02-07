import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceregComponent } from './choicereg.component';
const routes: Routes = [
  {
    path: '',
    component: ChoiceregComponent,
    data: {
      title: 'Choose'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoiceregRoutingModule { }
