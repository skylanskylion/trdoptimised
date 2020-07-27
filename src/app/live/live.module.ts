import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveRoutingModule } from './live-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import {LiveComponent} from './live.component';
@NgModule({
  imports: [
    CommonModule,
    LiveRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LiveComponent],
  exports: [LiveComponent]
})
export class LiveModule { }
