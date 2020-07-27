import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Csicon2019SlotBookingComponent } from './csicon2019-slot-booking.component';
import {Csicon2019SlotBookingRoutingModule} from './csicon2019-slot-booking-routing.module';
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
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

@NgModule({
  imports: [
    CommonModule,
    Csicon2019SlotBookingRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
      MatDatepickerModule,
      MatIconModule,
      MatNativeDateModule
  ],
  declarations: [Csicon2019SlotBookingComponent],
  exports:[Csicon2019SlotBookingComponent],
    providers: [MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
})
export class Csicon2019SlotBookingModule { }
