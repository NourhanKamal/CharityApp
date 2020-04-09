import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiftySevenPageRoutingModule } from './fifty-seven-routing.module';

import { FiftySevenPage } from './fifty-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiftySevenPageRoutingModule
  ],
  declarations: [FiftySevenPage]
})
export class FiftySevenPageModule {}
