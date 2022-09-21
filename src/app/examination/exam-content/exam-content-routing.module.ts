import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamContentPage } from './exam-content.page';

const routes: Routes = [
  {
    path: '',
    component: ExamContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamContentPageRoutingModule {}
