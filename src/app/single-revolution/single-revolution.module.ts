import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRevolutionRoutingModule } from './single-revolution-routing.module';
import {SingleRevolutionComponent} from './single-revolution.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    SingleRevolutionRoutingModule,
    FlexLayoutModule
  ],
  declarations: [SingleRevolutionComponent]
})
export class SingleRevolutionModule { }
