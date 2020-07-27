import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import {PresentationComponent} from './presentation.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatDialogModule} from '@angular/material';
import {SlideshowModule} from 'ng-simple-slideshow';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SliderModule} from "angular-image-slider";
import {SinglePopup2} from "./presentation.component";
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxPaginationModule} from 'ngx-pagination';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
//
// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto'
// };
@NgModule({
  imports: [
    CommonModule,
    PresentationRoutingModule,
    NavModule,
    FooterModule,
    MatFormFieldModule,
    MatInputModule,
    SlideshowModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSelectModule,
    SliderModule,
    MatDialogModule,
    FormsModule,
    PdfViewerModule,
    NgxPaginationModule
    // SwiperModule
  ],
  // providers:[
  //   {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG}
  // ],
  /*providers:[
    { provide: 'Window',  useValue: window }
  ],*/
  declarations: [
    PresentationComponent,
    SinglePopup2
  ],
  entryComponents: [
   SinglePopup2
  ],
})
export class PresentationModule { }
