import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  yearVal = new Date().getFullYear();

  month = new Date().getMonth();
  day = new Date().getDay();
  viewDate: Date = new Date(this.yearVal, this.month, this.day);

  constructor() { }

  ngOnInit() {
  }

  getYear(year: number){
    this.viewDate = new Date(year, this.month, this.day);
    this.yearVal = year;
  }

}
