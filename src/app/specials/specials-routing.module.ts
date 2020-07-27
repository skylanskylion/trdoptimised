import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpecialsComponent} from './specials.component';

const routes: Routes = [
  {
    path: '',
    component: SpecialsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialsRoutingModule {
}
