import { FormsService } from './../shared/services/forms/forms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../shared/styles/auth.scss'],
  providers: [FormsService]
})
export class SignupPage implements OnInit {

  constructor(public formsService: FormsService) { }

  ngOnInit() {
  }

}
