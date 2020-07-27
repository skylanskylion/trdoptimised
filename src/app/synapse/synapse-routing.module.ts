import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SynapseComponent} from './synapse.component';
import {BenefitsOfYogaComponent} from '../benefits-of-yoga/benefits-of-yoga.component';
import {GetAGoodStartComponent} from '../get-a-good-start/get-a-good-start.component';
import {SnackOfTheDayComponent} from '../snack-of-the-day/snack-of-the-day.component';
import {QuoteOfTheDayComponent} from '../quote-of-the-day/quote-of-the-day.component';
import {HomemadeRemediesComponent} from '../homemade-remedies/homemade-remedies.component';
import {TheLastWordComponent} from '../the-last-word/the-last-word.component';
import {SingleBenefitsOfYogaComponent} from '../single-benefits-of-yoga/single-benefits-of-yoga.component';

const routes: Routes = [
  {
    path: '',
    component: SynapseComponent
  },
  {path: 'benefits-of-yoga', component: BenefitsOfYogaComponent},
  {path: 'get-a-good-start', component: GetAGoodStartComponent},
  {path: 'snack-of-the-day', component: SnackOfTheDayComponent},
  {path: 'Quote-of-the-day', component: QuoteOfTheDayComponent},
  {path: 'homemade-remedies', component: HomemadeRemediesComponent},
  {path: 'the-last-word', component: TheLastWordComponent},
  {path: ':id/:slug', component: SingleBenefitsOfYogaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SynapseRoutingModule {
}
