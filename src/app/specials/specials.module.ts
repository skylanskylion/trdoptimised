import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpecialsRoutingModule} from './specials-routing.module';
import {SpecialsComponent} from './specials.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SpecialsRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [SpecialsComponent],
  exports: [SpecialsComponent]
})
export class SpecialsModule {
}
