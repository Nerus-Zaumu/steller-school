import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsPage } from './academics.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicsPage
  },
  {
    path: 'year',
    loadChildren: () => import('./year/year.module').then( m => m.YearPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'report-card',
    loadChildren: () => import('./report-cards/report-cards.module').then( m => m.ReportCardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicsPageRoutingModule {}
