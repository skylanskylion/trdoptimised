import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IagesRoutingModule } from './iages-routing.module';
import { IagesComponent, IagesPollsComponent, IagesQuestionAttemptedPopUp, IagesNotificationComponent } from './iages.component';
import { NavModule } from '../nav/nav.module';
import { FooterModule } from '../footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule, MatGridListModule, MatListModule, MatNativeDateModule} from "@angular/material";
import {
  MatCardModule,
  MatRadioModule,
  MatProgressBarModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    IagesRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, MatGridListModule, MatListModule, MatNativeDateModule
  ],
  declarations: [IagesComponent,IagesPollsComponent, IagesQuestionAttemptedPopUp, IagesNotificationComponent ],
  entryComponents:[
    IagesPollsComponent,IagesQuestionAttemptedPopUp,IagesNotificationComponent],
    providers: [ { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MatDialogRef, useValue: {} },
  ]
})
export class IagesModule { }
