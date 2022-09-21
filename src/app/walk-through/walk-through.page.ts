import { NavigationService } from './../shared/services/navigation/navigation.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.page.html',
  styleUrls: ['./walk-through.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalkThroughPage implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  // config: SwiperOptions = {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: true },
  // };

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

  slideNext(){
    this.swiper.swiperRef.slideNext();
  }

  slidePrev(){
    this.swiper.swiperRef.slidePrev();
  }

}
