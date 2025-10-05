import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing-module';
import { FormModule } from './form-module/form-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule,
    FormModule
  ]
})
export class TemplateDrivenFormModule { }
