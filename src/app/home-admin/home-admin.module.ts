import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import {HomeAdminComponent} from './home-admin.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DoctorDetailsComponent} from '../doctor-details/doctor-details.component';
import {ArticlesComponent} from '../articles/articles.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule, MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DoctorDetailsEditComponent} from '../doctor-details-edit/doctor-details-edit.component';
import {ImagesComponent} from '../images/images.component';

@NgModule({
  imports: [
    CommonModule,
    HomeAdminRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule
  ],
  declarations: [
    HomeAdminComponent,
    ArticlesComponent,
    DoctorDetailsComponent,
    DoctorDetailsEditComponent,
    ImagesComponent
  ]
})
export class HomeAdminModule { }
