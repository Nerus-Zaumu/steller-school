import { GeneralService } from './../shared/services/general/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  displayType = 'all';

  constructor(public generalService: GeneralService) { }

  ngOnInit() {
  }

  switchDisplayType(currentLink: string){
    this.displayType = currentLink;
  }

}
