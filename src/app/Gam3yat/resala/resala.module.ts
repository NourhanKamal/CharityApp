import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResalaPageRoutingModule } from './resala-routing.module';

import { ResalaPage } from './resala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResalaPageRoutingModule
  ],
  declarations: [ResalaPage]
})
export class ResalaPageModule {}
