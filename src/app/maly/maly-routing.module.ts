import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalyPage } from './maly.page';

const routes: Routes = [
  {
    path: '',
    component: MalyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalyPageRoutingModule {}
