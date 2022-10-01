import { AcademicsService } from './../../../shared/services/academics/academics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-card-details',
  templateUrl: './report-card-details.page.html',
  styleUrls: ['./report-card-details.page.scss'],
})
export class ReportCardDetailsPage implements OnInit {

  reportCardClass: string;

  constructor(public academicService: AcademicsService) { }

  ngOnInit() {
  }

  getReportCardClass(event: string){
    this.reportCardClass = event;
  }

}
