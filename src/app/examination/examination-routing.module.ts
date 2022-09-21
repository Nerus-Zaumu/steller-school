import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExaminationPage } from './examination.page';

const routes: Routes = [
  {
    path: '',
    component: ExaminationPage
  },
  {
    path: 'exam-content',
    loadChildren: () => import('./exam-content/exam-content.module').then( m => m.ExamContentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationPageRoutingModule {}
