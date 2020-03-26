import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyniPage } from './ayni.page';

const routes: Routes = [
  {
    path: '',
    component: AyniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyniPageRoutingModule {}
