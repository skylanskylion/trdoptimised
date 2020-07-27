import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditEsiconSlotBookingComponent} from "./edit-esicon-slot-booking.component";

const routes: Routes = [
  {
    path:'',
    component: EditEsiconSlotBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEsiconSlotBookingRoutingModule { }
