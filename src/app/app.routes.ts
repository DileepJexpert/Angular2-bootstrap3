import {Routes,RouterModule } from '@angular/router';
import {  ModuleWithProviders} from '@angular/core';
import { AboutComponent } from './about/about.component';
import { OwnerComponent } from './owner/owner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes} from './dashboard/dashboard.route';
import {Component, Inject} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { OwnerDetailsRoutes } from './owner/owner-details/index';
import { PetRoutes } from './pet/index';
import { GiftShopRoutes } from './gift-shop/index';
import {  HeroRoutes} from './hero/index';
import { HeroFormRoutes } from './hero-form/index';
import {TodoRoutes } from './todo/index';
import {BlogRoutes  } from "./blog/index";
// Route Congiguration

export const routes: Routes =[
  ...dashboardRoutes,
  ...OwnerDetailsRoutes,
  ...PetRoutes,
  ...GiftShopRoutes,
  ...HeroRoutes,
  ...HeroFormRoutes,
  ...TodoRoutes,
  ...BlogRoutes,
 { path: '**', component: LoginComponent },
  {path:'about' , component:AboutComponent},
   {path:'todo' , component:AboutComponent},
  {path: 'owner' , redirectTo:'/owner',pathMatch:'full'}
 

];

export const routings: ModuleWithProviders = RouterModule.forRoot(routes);