import { NavigationService } from './../shared/services/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-mode',
  templateUrl: './user-mode.page.html',
  styleUrls: ['./user-mode.page.scss'],
})
export class UserModePage implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

}
