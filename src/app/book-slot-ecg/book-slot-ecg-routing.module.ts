import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookSlotEcgComponent} from "./book-slot-ecg.component";

const routes: Routes = [
{
  path:'',
  component: BookSlotEcgComponent
}
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSlotEcgRoutingModule { }
