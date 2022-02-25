import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplePageRoutingModule } from './simple-page-routing.module';
import { SimplePageComponent } from './simple-page.component';
import {SharedModule} from '../../shared/shared.module';
import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule,
    SimplePageRoutingModule,
    SharedModule
  ],
  declarations: [SimplePageComponent, FaqComponent]
})
export class SimplePageModule { }
