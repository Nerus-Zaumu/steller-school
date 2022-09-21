import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportCardDetailsPageRoutingModule } from './report-card-details-routing.module';

import { ReportCardDetailsPage } from './report-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportCardDetailsPageRoutingModule
  ],
  declarations: [ReportCardDetailsPage]
})
export class ReportCardDetailsPageModule {}
