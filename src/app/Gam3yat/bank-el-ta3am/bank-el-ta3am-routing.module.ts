import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankElTa3amPage } from './bank-el-ta3am.page';

const routes: Routes = [
  {
    path: '',
    component: BankElTa3amPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankElTa3amPageRoutingModule {}
