import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimplePageComponent} from './simple-page.component';

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent,
    data: {
      breadcrumb: 'Our Psychologist',
      icon: 'icofont icofont-file-document bg-c-pink',
      breadcrumb_caption: 'Meet Our Qualified Doctors',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimplePageRoutingModule { }
