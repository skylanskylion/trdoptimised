import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneMoreThingComponent} from './one-more-thing.component';

const routes: Routes = [
  {
    path: '',
    component: OneMoreThingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneMoreThingRoutingModule {
}
