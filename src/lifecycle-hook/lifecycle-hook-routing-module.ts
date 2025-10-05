import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HookPage } from './hook-page/hook-page';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: HookPage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHookRoutingModule { }
