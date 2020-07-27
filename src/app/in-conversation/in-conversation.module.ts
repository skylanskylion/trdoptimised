import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InConversationRoutingModule} from './in-conversation-routing.module';
import {InConversationComponent} from './in-conversation.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {SliderModule} from 'angular-image-slider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InConversationRoutingModule,
    NavModule,
    FooterModule,
    SliderModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [
    InConversationComponent,

  ],
  exports: [InConversationComponent]
})
export class InConversationModule {
}
