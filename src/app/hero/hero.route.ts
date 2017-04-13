
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroDashboardComponent } from "./hero-dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroListComponent } from "./hero-list.component";

export const HeroRoutes: Routes = [
   {  path: 'hero',  component: HeroComponent ,
    children: [
      { path: '', component: HeroDashboardComponent }, // url: about/
      { path: 'list', component: HeroListComponent } ,
       { path: 'detail/:id', component: HeroDetailComponent } // url: about/item
    ]
  }
];
