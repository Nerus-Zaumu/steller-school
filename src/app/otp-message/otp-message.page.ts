import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-message',
  templateUrl: './otp-message.page.html',
  styleUrls: ['../shared/styles/auth.scss', './otp-message.page.scss'],
})
export class OtpMessagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onOtpChange($event: string) {
    throw new Error('Method not implemented.');
  }

}
