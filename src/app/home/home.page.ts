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

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

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


  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      500: {
        slidesPerView: 3,
      }
    }
  };

  constructor() {}


  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }



}
