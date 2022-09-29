import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearPageRoutingModule } from './year-routing.module';

import { YearPage } from './year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearPageRoutingModule,
    SharedModule
  ],
  declarations: [YearPage]
})
export class YearPageModule {}
