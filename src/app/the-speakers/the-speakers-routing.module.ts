import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TheSpeakersComponent} from './the-speakers.component';

const routes: Routes = [
  {
    path: '',
    component: TheSpeakersComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheSpeakersRoutingModule {
}
