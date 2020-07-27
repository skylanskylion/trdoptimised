import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrHkChopraComponent} from './dr-hk-chopra.component';

const routes: Routes = [
  {
    path: '',
    component: DrHkChopraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrHkChopraRoutingModule { }
