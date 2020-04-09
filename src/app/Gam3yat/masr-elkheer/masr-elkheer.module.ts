import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasrElkheerPageRoutingModule } from './masr-elkheer-routing.module';

import { MasrElkheerPage } from './masr-elkheer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasrElkheerPageRoutingModule
  ],
  declarations: [MasrElkheerPage]
})
export class MasrElkheerPageModule {}
