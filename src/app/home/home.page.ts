import { GeneralService } from './../shared/services/general/general.service';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Homework, HomeworkData } from '../shared/interfaces/homework.model';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../shared/styles/menu.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  config: SwiperOptions;

  homeworkData: HomeworkData[] = [
    {
      date: 'Mar 20, 2002',
      payload: [
        {
          iconName: 'checkmark-circle-outline',
          course: 'Mathematics',
          assignmentDescription: 'Submit Math CA on Thursday afternoon'
        },
        {
          iconName: 'checkmark-circle-outline',
          course: 'Mathematics',
          assignmentDescription: 'Submit Math CA on Thursday afternoon'
        },
        {
          iconName: 'checkmark-circle-outline',
          course: 'Mathematics',
          assignmentDescription: 'Submit Math CA on Thursday afternoon'
        },
        {
          iconName: 'checkmark-circle-outline',
          course: 'Mathematics',
          assignmentDescription: 'Submit Math CA on Thursday afternoon'
        },
        {
          iconName: 'checkmark-circle-outline',
          course: 'Mathematics',
          assignmentDescription: 'Submit Math CA on Thursday afternoon'
        },
      ]
    }
  ];



  constructor(private generalService: GeneralService) {
    this.config = this.generalService.getSwiperConfig(2, 2, 3);
  }


}
