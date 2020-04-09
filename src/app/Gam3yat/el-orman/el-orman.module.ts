import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElOrmanPageRoutingModule } from './el-orman-routing.module';

import { ElOrmanPage } from './el-orman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElOrmanPageRoutingModule
  ],
  declarations: [ElOrmanPage]
})
export class ElOrmanPageModule {}
