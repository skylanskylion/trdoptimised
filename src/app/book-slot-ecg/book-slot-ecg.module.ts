import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSlotEcgRoutingModule } from './book-slot-ecg-routing.module';
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule} from "@angular/material";
import {FormsModule} from '@angular/forms';
import {BookSlotEcgComponent } from "./book-slot-ecg.component";
@NgModule({
  imports: [
    CommonModule,
    BookSlotEcgRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [BookSlotEcgComponent]
})
export class BookSlotEcgModule { }
