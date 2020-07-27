import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleRevolutionComponent} from './single-revolution.component';

const routes: Routes = [
  {
    path:'',
    component: SingleRevolutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRevolutionRoutingModule { }
