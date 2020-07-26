import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarReviewPageRoutingModule } from './star-review-routing.module';

import { StarReviewPage } from './star-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarReviewPageRoutingModule
  ],
  declarations: [StarReviewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

  
})
export class StarReviewPageModule {}
