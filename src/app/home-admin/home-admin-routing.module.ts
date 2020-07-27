import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from './home-admin.component';
import {DoctorDetailsComponent} from '../doctor-details/doctor-details.component';
import {ArticlesComponent} from '../articles/articles.component';
import {DoctorDetailsEditComponent} from '../doctor-details-edit/doctor-details-edit.component';
import {ImagesComponent} from '../images/images.component';

const routes: Routes = [
  {
    path:'',
    component: HomeAdminComponent
  },
  {path: 'articles', component: ArticlesComponent},
  {path: 'Doctor-Details', component: DoctorDetailsComponent},
  {path: 'Doctor-Details/edit/:slug', component: DoctorDetailsEditComponent},
  {path: 'images', component: ImagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
