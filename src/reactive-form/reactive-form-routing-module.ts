import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPage } from './form-page/form-page';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: FormPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
