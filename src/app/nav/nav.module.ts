import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {TrdLoginSignup} from './nav.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule, MatToolbarModule} from '@angular/material';
import { NgStickyModule } from 'ng-sticky';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    NgStickyModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule
  ],
  declarations: [NavComponent,TrdLoginSignup],
  entryComponents: [TrdLoginSignup],
  exports: [NavComponent],
})
export class NavModule {
}
