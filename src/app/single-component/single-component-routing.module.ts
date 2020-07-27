import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleComponentComponent} from './single-component.component';

const routes: Routes = [
  {
    path:'',
    component: SingleComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleComponentRoutingModule { }
