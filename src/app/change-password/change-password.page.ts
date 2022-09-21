import { FormsService } from './../shared/services/forms/forms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss', '../shared/styles/auth.scss'],
  providers: [FormsService]
})
export class ChangePasswordPage implements OnInit {

  constructor(public formsService: FormsService) { }

  ngOnInit() {
  }

}
