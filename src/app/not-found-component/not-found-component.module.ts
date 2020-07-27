import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponentRoutingModule } from './not-found-component-routing.module';
import {NotFoundComponentComponent} from './not-found-component.component';

@NgModule({
  imports: [
    CommonModule,
    NotFoundComponentRoutingModule
  ],
  declarations: [NotFoundComponentComponent]
})
export class NotFoundComponentModule { }
