
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { TodoComponent } from './todo.component';
export const TodoRoutes: Route[] = [
  	{
    	path: 'todo',
    	component: TodoComponent,
		
  }
];