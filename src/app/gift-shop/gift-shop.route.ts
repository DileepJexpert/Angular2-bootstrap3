
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { GiftShopComponent } from './gift-shop.component';
export const GiftShopRoutes: Route[] = [
  {  path: 'gift',
        component: GiftShopComponent
      }
];