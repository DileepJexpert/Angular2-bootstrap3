import {  } from '../owner/owner.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerRoutes  } from '../owner/index';
import {  DashboardComponent} from './dashboard.component';
import { OwnerDetailsComponent } from '../owner/owner-details/owner-details.component';
import { OwnerDetailsRoutes } from '../owner/owner-details/index';
// Route Configuration
export const dashboardRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent,

children: [
	    	...OwnerRoutes
	     
    	]
 }
      
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class  DashboardRouting{ }