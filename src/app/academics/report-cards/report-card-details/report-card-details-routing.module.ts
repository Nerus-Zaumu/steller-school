import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportCardDetailsPage } from './report-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReportCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportCardDetailsPageRoutingModule {}
