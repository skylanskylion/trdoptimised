import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InConversationComponent} from './in-conversation.component';

const routes: Routes = [
  {
    path: '',
    component: InConversationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InConversationRoutingModule {
}
