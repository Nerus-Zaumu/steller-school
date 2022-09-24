import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() yearVal = new Date().getFullYear();

  @Output() year: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  incrementYear(){
    this.yearVal++;
    this.yearChanged();
  }

  decrementYear(){
    this.yearVal--;
    this.yearChanged();
  }

  yearChanged(){
    this.year.emit(this.yearVal);
  }


}
