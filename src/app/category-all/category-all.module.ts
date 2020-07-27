import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAllRoutingModule } from './category-all-routing.module';
import {CategoryAllComponent} from './category-all.component';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {SliderModule} from 'angular-image-slider';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    CategoryAllRoutingModule,
    SharedModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    VgControlsModule,
    VgCoreModule,
    SliderModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
  ],
  declarations: [CategoryAllComponent],
  exports: [CategoryAllComponent],
})
export class CategoryAllModule { }
