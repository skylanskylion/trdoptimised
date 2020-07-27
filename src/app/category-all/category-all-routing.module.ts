import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryAllComponent} from './category-all.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryAllRoutingModule { }
