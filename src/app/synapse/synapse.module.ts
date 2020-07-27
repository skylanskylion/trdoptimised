import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SynapseRoutingModule} from './synapse-routing.module';
import {SynapseComponent} from './synapse.component';
import {NavModule} from '../nav/nav.module';
import {FooterModule} from '../footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BenefitsOfYogaComponent} from '../benefits-of-yoga/benefits-of-yoga.component';
import {MatGridListModule, MatListModule} from '@angular/material';
import {GetAGoodStartComponent} from '../get-a-good-start/get-a-good-start.component';
import {SnackOfTheDayComponent} from '../snack-of-the-day/snack-of-the-day.component';
import {QuoteOfTheDayComponent} from '../quote-of-the-day/quote-of-the-day.component';
import {HomemadeRemediesComponent} from '../homemade-remedies/homemade-remedies.component';
import {TheLastWordComponent} from '../the-last-word/the-last-word.component';
import {SingleBenefitsOfYogaComponent} from '../single-benefits-of-yoga/single-benefits-of-yoga.component';
import {SinglePopup} from "../single-benefits-of-yoga/single-benefits-of-yoga.component";
import {SinglePopup2} from "../presentation/presentation.component";
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatDialogModule} from '@angular/material';
import {SlideshowModule} from 'ng-simple-slideshow';
import {SliderModule} from "angular-image-slider";
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    SynapseRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
      MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatDialogModule,
      SlideshowModule,
      SliderModule,
      FormsModule,PdfViewerModule,NgxPaginationModule
  ],
  declarations: [
    SynapseComponent,
    BenefitsOfYogaComponent,
    GetAGoodStartComponent,
    SnackOfTheDayComponent,
    QuoteOfTheDayComponent,
    HomemadeRemediesComponent,
    TheLastWordComponent,
    SingleBenefitsOfYogaComponent,
      SinglePopup
  ],
  exports: [SynapseComponent],
    entryComponents: [SinglePopup]
})
export class SynapseModule {
}
