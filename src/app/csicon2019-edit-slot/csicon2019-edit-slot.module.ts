import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Csicon2019EditSlotRoutingModule} from './csicon2019-edit-slot-routing.module';
import {Csicon2019EditSlotComponent} from "./csicon2019-edit-slot.component";
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
//import { Csicon2019EditSlotComponent } from './csicon2019-edit-slot.component';

@NgModule({
  imports: [
    CommonModule,
    Csicon2019EditSlotRoutingModule,
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
  declarations: [Csicon2019EditSlotComponent],
    providers: [MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
})
export class Csicon2019EditSlotModule { }
