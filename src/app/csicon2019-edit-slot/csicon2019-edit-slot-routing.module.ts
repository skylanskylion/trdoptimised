import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Csicon2019EditSlotComponent} from "./csicon2019-edit-slot.component";

const routes: Routes = [
  {
    path:'',
    component: Csicon2019EditSlotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Csicon2019EditSlotRoutingModule { }
