import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpMessagePageRoutingModule } from './otp-message-routing.module';

import { OtpMessagePage } from './otp-message.page';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpMessagePageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [OtpMessagePage]
})
export class OtpMessagePageModule {}
