import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportContactComponent } from './import-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ImportContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportContactRoutingModule { }
