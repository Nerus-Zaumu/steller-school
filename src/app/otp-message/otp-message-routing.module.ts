import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpMessagePage } from './otp-message.page';

const routes: Routes = [
  {
    path: '',
    component: OtpMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpMessagePageRoutingModule {}
