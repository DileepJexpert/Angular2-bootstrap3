import {  } from '../owner/owner.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { OwnerListComponent } from './owner-list/index';
import {OwnerDetailsComponent  } from './owner-details/owner-details.component';
export const OwnerRoutes: Route[] = [
  	{
    	path: 'home',
    	component: OwnerListComponent,
 /*children: [
      {
        path: 'owner/:id',
        component: OwnerDetailsComponent
      }
    //   {
    //     path: 'create',
    //     component: UserCreateComponent
    //   },
    //   {
    //     path: ':id',
    //     component: UserSingleComponent
    //   },
    //   {
    //     path: ':id/edit',
    //     component: UserEditComponent
    //   }
    ]*/
  }
];
