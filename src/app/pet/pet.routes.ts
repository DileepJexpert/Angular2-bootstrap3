import {  } from '../owner/owner.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { PetComponent } from './pet.component';
export const PetRoutes: Route[] = [
  {  path: 'pets',
        component: PetComponent
      }
];