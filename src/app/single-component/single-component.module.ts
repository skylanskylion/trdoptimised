import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleComponentRoutingModule } from './single-component-routing.module';
import {SingleComponentComponent} from './single-component.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    SingleComponentRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [SingleComponentComponent]
})
export class SingleComponentModule { }
