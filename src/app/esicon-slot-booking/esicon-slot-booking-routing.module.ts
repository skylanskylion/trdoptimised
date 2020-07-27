import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EsiconSlotBookingComponent} from './esicon-slot-booking.component';

const routes: Routes = [
  {
    path:'',
    component: EsiconSlotBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsiconSlotBookingRoutingModule { }