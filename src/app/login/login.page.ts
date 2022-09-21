import { FormsService } from './../shared/services/forms/forms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../shared/styles/auth.scss'],
  providers: [FormsService]
})
export class LoginPage implements OnInit {

  constructor(public formsService: FormsService) { }

  ngOnInit() {
  }

}
