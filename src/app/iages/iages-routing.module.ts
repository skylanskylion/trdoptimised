import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IagesComponent } from './iages.component';

const routes: Routes = [{
  path :"",
  component : IagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IagesRoutingModule { }
