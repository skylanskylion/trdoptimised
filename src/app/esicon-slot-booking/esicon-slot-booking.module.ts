import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsiconSlotBookingRoutingModule } from './esicon-slot-booking-routing.module';
import {EsiconSlotBookingComponent} from './esicon-slot-booking.component';
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
    EsiconSlotBookingRoutingModule,
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
  declarations: [EsiconSlotBookingComponent],
  exports:[EsiconSlotBookingComponent],
    providers: [MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
})
export class EsiconSlotBookingModule { }
