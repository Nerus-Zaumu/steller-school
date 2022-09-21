import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { WalkThroughPageRoutingModule } from './walk-through-routing.module';

import { WalkThroughPage } from './walk-through.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkThroughPageRoutingModule,
    SwiperModule,
    SharedModule
  ],
  declarations: [WalkThroughPage]
})
export class WalkThroughPageModule {}
