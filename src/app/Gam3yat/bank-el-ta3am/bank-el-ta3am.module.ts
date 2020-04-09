import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankElTa3amPageRoutingModule } from './bank-el-ta3am-routing.module';

import { BankElTa3amPage } from './bank-el-ta3am.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankElTa3amPageRoutingModule
  ],
  declarations: [BankElTa3amPage]
})
export class BankElTa3amPageModule {}
