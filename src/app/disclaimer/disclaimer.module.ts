import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisclaimerComponent} from './disclaimer.component';
import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import {SliderModule} from 'angular-image-slider';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
@NgModule({
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    SliderModule,
    NavModule,
    FooterModule
  ],
  declarations: [DisclaimerComponent],
  exports: [DisclaimerComponent]
})
export class DisclaimerModule { }
