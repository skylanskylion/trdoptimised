import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TermsOfServiceComponent} from './terms-of-service.component';
import { TermsOfServiceRoutingModule } from './terms-of-service-routing.module';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
@NgModule({
  imports: [
    CommonModule,
    TermsOfServiceRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [TermsOfServiceComponent],
  exports: [TermsOfServiceComponent]
})
export class TermsOfServiceModule { }
