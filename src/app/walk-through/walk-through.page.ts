import { GeneralService } from './../shared/services/general/general.service';
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

  constructor(public navigationService: NavigationService, public generalService: GeneralService) {
  }

  ngOnInit() {
  }


}
