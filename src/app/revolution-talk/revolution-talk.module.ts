import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevolutionTalkRoutingModule } from './revolution-talk-routing.module';
import {RevolutionTalkComponent} from './revolution-talk.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RevolutionTalkRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [RevolutionTalkComponent]
})
export class RevolutionTalkModule { }
