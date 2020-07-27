import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleEventCategoryComponent} from "./single-event-category.component";
import {SingleBenefitsOfYoga1Component} from "../single-benefits-of-yoga1/single-benefits-of-yoga1.component";
import {SingleBenefitsOfYoga2Component} from "../single-benefits-of-yoga2/single-benefits-of-yoga2.component";
import {SingleBenefitsOfYoga3Component} from "../single-benefits-of-yoga3/single-benefits-of-yoga3.component";
import {C3Galery3Component} from "../c3-galery3/c3-galery3.component";
import {C3Galery4Component} from "../c3-galery4/c3-galery4.component";
import {C3Galery5Component} from "../c3-galery5/c3-galery5.component";
import {C3Galery6Component} from "../c3-galery6/c3-galery6.component";

const routes: Routes = [
  {
    path:'',
    component: SingleEventCategoryComponent
  },
    {path: 'synapse/gallerywcc2016/:slug/:id', component:SingleBenefitsOfYoga1Component},
   /* {path: 'synapse/gallerywcc20162/:slug/:id', component:SingleBenefitsOfYoga2Component},*/
   /* {path: 'synapse/gallerywcc20163/:slug/:id', component:SingleBenefitsOfYoga3Component},*/
    {path: 'synapse/gallery3/:id/:slug', component:C3Galery3Component},
    {path: 'synapse/gallery4/:id/:slug', component:C3Galery4Component},
    {path: 'synapse/gallery5/:id/:slug', component:C3Galery5Component},
    {path: 'synapse/gallery6/:id/:slug', component:C3Galery6Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleEventCategoryRoutingModule { }
