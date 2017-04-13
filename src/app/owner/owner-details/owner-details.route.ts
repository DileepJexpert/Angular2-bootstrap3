import {  } from '../owner/owner.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { OwnerDetailsComponent } from './owner-details.component';
export const OwnerDetailsRoutes: Route[] = [
  {  path: 'owner/:id',
        component: OwnerDetailsComponent
      }
];