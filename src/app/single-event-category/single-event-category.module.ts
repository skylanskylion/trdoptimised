import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleEventCategoryRoutingModule } from './single-event-category-routing.module';
import {SingleEventCategoryComponent} from './single-event-category.component';
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from '../shared/shared.module';
import {MatListModule, MatGridListModule, MatFormFieldModule} from "@angular/material";
import {
    SingleBenefitsOfYoga1Component,
    SinglePopup1
} from "../single-benefits-of-yoga1/single-benefits-of-yoga1.component";
/*import {
    SingleBenefitsOfYoga2Component,
    SinglePopup2
} from "../single-benefits-of-yoga2/single-benefits-of-yoga2.component";*/
/*import {
    SingleBenefitsOfYoga3Component,
    SinglePopup3
} from "../single-benefits-of-yoga3/single-benefits-of-yoga3.component";*/

import {C3Galery3Component, SinglePopup4} from "../c3-galery3/c3-galery3.component";
import {C3Galery4Component, SinglePopup5} from "../c3-galery4/c3-galery4.component";
import {C3Galery5Component, SinglePopup6} from "../c3-galery5/c3-galery5.component";
import {C3Galery6Component, SinglePopup7} from "../c3-galery6/c3-galery6.component";
import {CatagoryServiceService} from "../catagory-service.service";
import {UserServiceService} from "../user-service.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    SingleEventCategoryRoutingModule,
    NavModule,
    FooterModule,
    FlexLayoutModule,
      FormsModule,
    SharedModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule
  ],
  declarations: [
      SingleEventCategoryComponent,
      SingleBenefitsOfYoga1Component,
     /* SingleBenefitsOfYoga2Component,*/
      /*SingleBenefitsOfYoga3Component,*/
      C3Galery3Component,
      C3Galery4Component,
      C3Galery5Component,
      C3Galery6Component,
      //SinglePopup3,
      //SinglePopup2,
      SinglePopup1, SinglePopup4,SinglePopup5,SinglePopup6, SinglePopup7
  ],
entryComponents:[SinglePopup1, SinglePopup4,SinglePopup5,SinglePopup6, SinglePopup7],
    providers: [CatagoryServiceService, UserServiceService],
  exports:[SingleEventCategoryComponent,
      SingleBenefitsOfYoga1Component,
      C3Galery3Component,
      C3Galery4Component,
      C3Galery5Component,
      C3Galery6Component
  ]
})
export class SingleEventCategoryModule { }
