import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserModePageRoutingModule } from './user-mode-routing.module';

import { UserModePage } from './user-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserModePageRoutingModule
  ],
  declarations: [UserModePage]
})
export class UserModePageModule {}
