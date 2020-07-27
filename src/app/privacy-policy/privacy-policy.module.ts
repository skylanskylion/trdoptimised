import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import {PrivacyPolicyComponent} from "./privacy-policy.component";
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [PrivacyPolicyComponent],
  exports: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule { }
