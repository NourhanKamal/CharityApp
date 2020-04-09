import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiftySevenPage } from './fifty-seven.page';

const routes: Routes = [
  {
    path: '',
    component: FiftySevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiftySevenPageRoutingModule {}
