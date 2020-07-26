import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';

import { StarReviewPage } from '../star-review/star-review.page'
// import { StarReviewPageModule } from '../star-review/star-review.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
   // StarReviewPageModule
    
  ],
  declarations: [InfoPage , StarReviewPage],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InfoPageModule {}
