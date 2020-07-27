import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEsiconSlotBookingRoutingModule } from './edit-esicon-slot-booking.routing.module';
import {EditEsiconSlotBookingComponent} from "./edit-esicon-slot-booking.component";
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatDatepickerModule,
    MAT_DATE_LOCALE, MatNativeDateModule
} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditEsiconSlotBookingRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
      MatDatepickerModule,
       MatNativeDateModule,
      MatIconModule
  ],
  declarations: [EditEsiconSlotBookingComponent],
    providers: [MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
})
export class EsiconEditSlotBookingModule { }
