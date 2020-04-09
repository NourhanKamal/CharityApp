import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhlMasrPage } from './ahl-masr.page';

const routes: Routes = [
  {
    path: '',
    component: AhlMasrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhlMasrPageRoutingModule {}
