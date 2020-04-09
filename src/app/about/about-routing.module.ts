import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';
import {CharityListComponent} from './charity-list/charity-list.component'
import {ResalaNewComponent} from './resala-new/resala-new.component'

const routes: Routes = [
  
  {
    path: '',
    component: AboutPage, children:[
        {path: 'resala', component: ResalaNewComponent},
        {path: '57357', component: ResalaNewComponent},
        {path: 'orman', component: ResalaNewComponent},
        {path: '', component: CharityListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
