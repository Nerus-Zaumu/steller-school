import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeBoardPageRoutingModule } from './notice-board-routing.module';

import { NoticeBoardPage } from './notice-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeBoardPageRoutingModule,
    SharedModule
  ],
  declarations: [NoticeBoardPage]
})
export class NoticeBoardPageModule {}
