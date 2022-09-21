import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportCardsPage } from './report-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ReportCardsPage
  },
  {
    path: 'report-card-details',
    loadChildren: () => import('./report-card-details/report-card-details.module').then( m => m.ReportCardDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportCardsPageRoutingModule {}
