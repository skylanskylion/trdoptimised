import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventHomeRoutingModule } from './event-home-routing.module';
import {EventHomeComponent} from './event-home.component';
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule, MatGridListModule, MatListModule} from "@angular/material";
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    EventHomeRoutingModule,
    NavModule,
    MatListModule,
    FooterModule,
    FlexLayoutModule,
    MatGridListModule,
    SharedModule,
    MatFormFieldModule,

  ],
  declarations: [EventHomeComponent],
  exports: [EventHomeComponent]
})
export class EventHomeModule { }
