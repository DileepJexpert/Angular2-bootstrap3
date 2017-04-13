import {  } from '../owner/owner.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { OwnerListComponent } from './index';
export const OwnerListRoutes: Route[] = [
  	{
    	path: 'home',
    	component: OwnerListComponent,
		
  }
];