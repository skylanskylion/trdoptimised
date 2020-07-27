import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrRishiJainComponent} from './dr-rishi-jain.component';

const routes: Routes = [
  {
    path: '',
    component: DrRishiJainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrRishiJainRoutingModule { }
