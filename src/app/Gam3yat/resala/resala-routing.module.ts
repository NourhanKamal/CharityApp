import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResalaPage } from './resala.page';

const routes: Routes = [
  {
    path: '',
    component: ResalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResalaPageRoutingModule {}
