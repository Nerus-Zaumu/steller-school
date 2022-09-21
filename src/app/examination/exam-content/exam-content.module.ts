import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamContentPageRoutingModule } from './exam-content-routing.module';

import { ExamContentPage } from './exam-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamContentPageRoutingModule
  ],
  declarations: [ExamContentPage]
})
export class ExamContentPageModule {}
