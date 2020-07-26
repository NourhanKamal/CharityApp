import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarReviewPage } from './star-review.page';

const routes: Routes = [
  {
    path: '',
    component: StarReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarReviewPageRoutingModule {}
