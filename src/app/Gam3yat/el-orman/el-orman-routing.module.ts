import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElOrmanPage } from './el-orman.page';

const routes: Routes = [
  {
    path: '',
    component: ElOrmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElOrmanPageRoutingModule {}
