import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TheInterviewRoutingModule} from './the-interview-routing.module';
import {TheInterviewComponent} from './the-interview.component';
import {SliderModule} from 'angular-image-slider';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NavModule,
    FooterModule,
    TheInterviewRoutingModule,
    SliderModule
  ],
  declarations: [TheInterviewComponent],
  exports: [TheInterviewComponent]
})
export class TheInterviewModule {
}
