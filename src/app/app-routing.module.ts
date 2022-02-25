import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
<<<<<<< HEAD
import {FAQComponent} from './pages/faq/faq.component';
=======
import {FaqComponent} from './pages/faq/faq.component';
>>>>>>> 9c1bc1be0cf2ec498f1ce3cf680ad07bb7a15f30
import {DoctorProfileComponent} from './pages/doctor-profile/doctor-profile.component';
import {DoctorProfile2Component} from './pages/doctor-profile2/doctor-profile2.component';
import {DoctorProfile3Component} from './pages/doctor-profile3/doctor-profile3.component';
import {DoctorProfile4Component} from './pages/doctor-profile4/doctor-profile4.component';
import {DoctorProfile5Component} from './pages/doctor-profile5/doctor-profile5.component';
import {DoctorProfile6Component} from './pages/doctor-profile6/doctor-profile6.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
<<<<<<< HEAD
    component: FAQComponent,
    children: [
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FAQModule)
=======
    component: FaqComponent,
    children: [
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)
>>>>>>> 9c1bc1be0cf2ec498f1ce3cf680ad07bb7a15f30
      }
    ]
  },
 
  {
    path: '',
    component: DoctorProfileComponent,
    children: [
      {
        path: 'profile1',
        loadChildren: () => import('./pages/doctor-profile/doctor-profile.module').then(m => m.DoctorProfileModule)
      }
    ]
  },
  {
    path: '',
    component: DoctorProfile2Component,
    children: [
      {
        path: 'profile2',
        loadChildren: () => import('./pages/doctor-profile2/doctor-profile2.module').then(m => m.DoctorProfile2Module)
      }
    ]
  },
  {
    path: '',
    component: DoctorProfile3Component,
    children: [
      {
        path: 'profile3',
        loadChildren: () => import('./pages/doctor-profile3/doctor-profile3.module').then(m => m.DoctorProfile3Module)
      }
    ]
  },
  {
    path: '',
    component: DoctorProfile4Component,
    children: [
      {
        path: 'profile4',
        loadChildren: () => import('./pages/doctor-profile4/doctor-profile4.module').then(m => m.DoctorProfile4Module)
      }
    ]
  },
  {
    path: '',
    component: DoctorProfile5Component,
    children: [
      {
        path: 'profile5',
        loadChildren: () => import('./pages/doctor-profile5/doctor-profile5.module').then(m => m.DoctorProfile5Module)
      }
    ]
  },
  {
    path: '',
    component: DoctorProfile6Component,
    children: [
      {
        path: 'profile6',
        loadChildren: () => import('./pages/doctor-profile6/doctor-profile6.module').then(m => m.DoctorProfile6Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
