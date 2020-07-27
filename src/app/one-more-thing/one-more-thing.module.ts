import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneMoreThingComponent} from './one-more-thing.component';
import {NavModule} from '../nav/nav.module';
import {SliderModule} from 'angular-image-slider';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';
import {OneMoreThingRoutingModule} from './one-more-thing-routing-module';

@NgModule({
  imports: [
    CommonModule,
    OneMoreThingRoutingModule,
    FlexLayoutModule,
    NavModule,
    FooterModule,
    SliderModule,
    SharedModule,
  ],
  declarations: [OneMoreThingComponent],
  exports: [OneMoreThingComponent]
})
export class OneMoreThingModule {
}
