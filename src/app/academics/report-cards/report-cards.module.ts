import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportCardsPageRoutingModule } from './report-cards-routing.module';

import { ReportCardsPage } from './report-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportCardsPageRoutingModule
  ],
  declarations: [ReportCardsPage]
})
export class ReportCardsPageModule {}
