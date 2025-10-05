import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHookRoutingModule } from './lifecycle-hook-routing-module';
import { HookPage } from './hook-page/hook-page';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LifecycleHookRoutingModule,
    HookPage
  ]
})
export class LifecycleHookModule { }
