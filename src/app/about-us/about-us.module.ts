import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import {AboutUsComponent} from "./about-us.component";
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NavModule,
    FooterModule
  ],
  declarations: [AboutUsComponent],
  exports:[AboutUsComponent]
})
export class AboutUsModule { }
