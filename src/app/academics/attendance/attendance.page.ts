import { AttendanceData } from './../../shared/interfaces/calendar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  dataHolder: AttendanceData[] = [
    {
      year: 2020,
      months: [
        {month: 'JAN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'FEB', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'APR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAY', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUL', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'AUG', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'SEP', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'OCT', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'NOV', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'DEC', presentCount: 15, absentCount: 12, leaveCount: 23},
      ]
    },
    {
      year: 2021,
      months: [
        {month: 'JAN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'FEB', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'APR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAY', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUL', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'AUG', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'SEP', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'OCT', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'NOV', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'DEC', presentCount: 15, absentCount: 12, leaveCount: 23},
      ]
    },
    {
      year: 2022,
      months: [
        {month: 'JAN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'FEB', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'APR', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'MAY', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUN', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'JUL', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'AUG', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'SEP', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'OCT', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'NOV', presentCount: 15, absentCount: 12, leaveCount: 23},
        {month: 'DEC', presentCount: 15, absentCount: 12, leaveCount: 23},
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }


}
