import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TheInterviewComponent} from './the-interview.component';

const routes: Routes = [
  {
    path: '',
    component: TheInterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheInterviewRoutingModule {
}
