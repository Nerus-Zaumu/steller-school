import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { FeesTemplateComponent } from './fees-template/fees-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
  ],
  declarations: [
    TransactionsPage,
    FeesTemplateComponent
  ],
  exports: [
    TransactionsPage
  ]
})
export class TransactionsPageModule {}
