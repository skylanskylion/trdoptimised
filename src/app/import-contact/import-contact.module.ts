import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportContactRoutingModule } from './import-contact-routing.module';
import { ImportContactComponent } from './import-contact.component';
import { NavModule } from '../nav/nav.module';
import { FooterModule } from '../footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ImportContactRoutingModule,
    CommonModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ImportContactComponent],
  exports: [ImportContactComponent]
})
export class ImportContactModule { }
