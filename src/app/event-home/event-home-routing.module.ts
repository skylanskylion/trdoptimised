import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventHomeComponent} from "./event-home.component";

const routes: Routes = [
  {
    path:'',
    component: EventHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventHomeRoutingModule { }
