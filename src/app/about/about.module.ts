import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';
import {CharityListComponent} from './charity-list/charity-list.component'
import {ResalaNewComponent} from './resala-new/resala-new.component'
import { AboutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage,CharityListComponent,ResalaNewComponent],
  providers:[CharityListComponent]
})
export class AboutPageModule {}
