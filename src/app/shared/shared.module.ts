import { TransactionsPageModule } from './components/transactions/transactions.module';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeworkTemplateComponent } from './components/homework-template/homework-template.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MultimediaTemplateComponent } from './components/multimedia-template/multimedia-template.component';
import { NoticeTemplateComponent } from './components/notice-template/notice-template.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeworkTemplateComponent,
    NoticeTemplateComponent,
    MultimediaTemplateComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    RouterModule,
    SwiperModule,
    TransactionsPageModule
  ],
  exports: [
    ToolbarComponent,
    HomeworkTemplateComponent,
    NoticeTemplateComponent,
    MultimediaTemplateComponent,
    TransactionsPageModule,
  ]
})

export class SharedModule {}

