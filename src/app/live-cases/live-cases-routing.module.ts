import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LiveCasesComponent} from './live-cases.component';

const routes: Routes = [
  {
    path:'',
    component: LiveCasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveCasesRoutingModule { }
