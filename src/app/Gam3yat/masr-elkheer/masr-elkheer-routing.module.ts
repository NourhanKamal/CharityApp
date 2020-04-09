import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasrElkheerPage } from './masr-elkheer.page';

const routes: Routes = [
  {
    path: '',
    component: MasrElkheerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasrElkheerPageRoutingModule {}
