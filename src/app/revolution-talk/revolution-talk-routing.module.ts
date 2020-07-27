import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RevolutionTalkComponent} from './revolution-talk.component';

const routes: Routes = [
  {
    path:'',
    component: RevolutionTalkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevolutionTalkRoutingModule { }
