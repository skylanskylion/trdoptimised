import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TheSpeakersRoutingModule} from './the-speakers-routing.module';
import {TheSpeakersComponent} from './the-speakers.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {SliderModule} from 'angular-image-slider';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NavModule,
    FooterModule,
    TheSpeakersRoutingModule,
    SliderModule,
    SharedModule
  ],
  declarations: [TheSpeakersComponent],
  exports: [TheSpeakersComponent]
})
export class TheSpeakersModule {
}
