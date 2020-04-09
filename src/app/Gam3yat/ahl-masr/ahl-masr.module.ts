import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhlMasrPageRoutingModule } from './ahl-masr-routing.module';

import { AhlMasrPage } from './ahl-masr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhlMasrPageRoutingModule
  ],
  declarations: [AhlMasrPage]
})
export class AhlMasrPageModule {}
