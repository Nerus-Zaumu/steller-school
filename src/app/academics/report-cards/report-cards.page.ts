import { AcademicsService } from './../../shared/services/academics/academics.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report-cards',
  templateUrl: './report-cards.page.html',
  styleUrls: ['./report-cards.page.scss'],
})
export class ReportCardsPage implements OnInit {


  constructor(private router: Router, private academicsService: AcademicsService) { }

  ngOnInit() {
  }

  viewReportCard(classTitle: string){
    this.academicsService.reportCardClass = classTitle;
    this.router.navigate(['/dashboard/academics/report-card/report-card-details']);
  }

}
