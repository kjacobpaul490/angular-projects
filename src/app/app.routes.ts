import { Routes } from '@angular/router';
import { MathCounter } from '../pages/math-counter/math-counter';
import { Caluculator } from '../mathfunction/caluculator/caluculator';
import { PropertyBinding } from '../pages/property-binding/property-binding';
import { GenderBasedProduct } from '../pages/gender-based-product/gender-based-product';
import { BuiltInPipes } from '../pages/built-in-pipes/built-in-pipes';
import { UsersList } from '../users/users-list/users-list';

export const routes: Routes = [
  { path: '', redirectTo: '/math-counter', pathMatch: 'full' },
  { path: 'math-counter', component: MathCounter },
  { path: 'calculator', component: Caluculator },
  { path: 'property-binding', component: PropertyBinding },
  { path: 'gender-based-product', component: GenderBasedProduct },
  { path: 'built-in-pipes', component: BuiltInPipes },
  { path: 'users-list', component: UsersList },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) 
  },
  { 
    path: 'hooks', 
    loadChildren: () => import('./../lifecycle-hook/lifecycle-hook-module').then(m => m.LifecycleHookModule) 
  },
  { path: '**', redirectTo: '/math-counter' } // Wildcard route for 404 pages
];
