import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalyPageRoutingModule } from './maly-routing.module';

import { MalyPage } from './maly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalyPageRoutingModule
  ],
  declarations: [MalyPage]
})
export class MalyPageModule {}
