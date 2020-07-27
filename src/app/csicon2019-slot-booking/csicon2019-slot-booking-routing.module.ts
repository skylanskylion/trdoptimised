import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Csicon2019SlotBookingComponent } from './csicon2019-slot-booking.component';

const routes: Routes = [
  {
    path:'',
    component: Csicon2019SlotBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Csicon2019SlotBookingRoutingModule { }
