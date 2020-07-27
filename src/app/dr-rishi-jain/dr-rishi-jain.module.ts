import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrRishiJainComponent} from './dr-rishi-jain.component';
import { DrRishiJainRoutingModule } from './dr-rishi-jain-routing.module';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    DrRishiJainRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule
  ],
  declarations: [DrRishiJainComponent],
  exports: [DrRishiJainComponent]
})
export class DrRishiJainModule { }
