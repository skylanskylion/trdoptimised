import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveCasesRoutingModule } from './live-cases-routing.module';
import {LiveCasesComponent} from './live-cases.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    LiveCasesRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  declarations: [LiveCasesComponent],
  exports: [LiveCasesComponent]
})
export class LiveCasesModule { }
