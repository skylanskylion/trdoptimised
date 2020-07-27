import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from './products.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    NavModule,
    FooterModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
