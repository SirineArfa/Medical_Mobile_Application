import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/faq/faq.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { DoctorProfile2Component } from './pages/doctor-profile2/doctor-profile2.component';
import { DoctorProfile3Component } from './pages/doctor-profile3/doctor-profile3.component';
import { DoctorProfile4Component } from './pages/doctor-profile4/doctor-profile4.component';
import { DoctorProfile5Component } from './pages/doctor-profile5/doctor-profile5.component';
import { DoctorProfile6Component } from './pages/doctor-profile6/doctor-profile6.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    FaqComponent,
    DoctorProfileComponent,
    DoctorProfile2Component,
    DoctorProfile3Component,
    DoctorProfile4Component,
    DoctorProfile5Component,
    DoctorProfile6Component,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
