import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

 navToWalkThrough = timer(3000);

  constructor(private router: Router) { }

  ngOnInit() {
    this.navToWalkThrough.subscribe(() => {
      this.router.navigate(['/walk-through']);
    });
  }

}
