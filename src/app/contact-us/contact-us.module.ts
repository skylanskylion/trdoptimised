import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import {ContactUsComponent} from "./contact-us.component";
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }
