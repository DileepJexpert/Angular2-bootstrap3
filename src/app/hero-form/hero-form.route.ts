
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { HeroFormComponent } from './hero-form.component';
export const HeroFormRoutes: Route[] = [
  {  path: 'heroform',
        component: HeroFormComponent
      }
];