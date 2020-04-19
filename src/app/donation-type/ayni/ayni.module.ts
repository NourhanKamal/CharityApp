import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyniPageRoutingModule } from './ayni-routing.module';

import { AyniPage } from './ayni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyniPageRoutingModule
  ],
  declarations: [AyniPage]
})
export class AyniPageModule {}
