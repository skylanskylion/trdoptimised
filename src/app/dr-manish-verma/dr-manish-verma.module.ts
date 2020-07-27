import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrManishVermaComponent} from './dr-manish-verma.component';
import { DrManishVermaRoutingModule } from './dr-manish-verma-routing.module';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    DrManishVermaRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule
  ],
  declarations: [DrManishVermaComponent],
  exports: [DrManishVermaComponent]
})
export class DrManishVermaModule { }
