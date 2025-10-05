import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing-module';
import { Home } from './home/home';
import { About } from './about/about';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    Home,
    About
  ]
})
export class AdminModule { }
