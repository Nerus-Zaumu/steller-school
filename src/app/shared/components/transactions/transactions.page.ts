import { GeneralService } from './../../services/general/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  feesNavigationController = 'school';

  feesContent = this.generalService.schoolFeeData;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

  gotoSpecificTransaction(transactionType: string){
    this.feesNavigationController = transactionType;
    if(transactionType === 'school'){
      this.feesContent = this.generalService.schoolFeeData;
    }
    if(transactionType === 'exam'){
      this.feesContent = this.generalService.examFeeData;
    }
    if(transactionType === 'activity'){
      this.feesContent = this.generalService.activityFeeData;
    }
  }

}
