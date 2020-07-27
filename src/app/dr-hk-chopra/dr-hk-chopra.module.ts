import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrHkChopraComponent} from './dr-hk-chopra.component';
import { DrHkChopraRoutingModule } from './dr-hk-chopra-routing.module';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    DrHkChopraRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule
  ],
  declarations: [DrHkChopraComponent],
  exports: [DrHkChopraComponent],
})
export class DrHkChopraModule { }
