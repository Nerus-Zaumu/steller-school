import { Fees } from './../../../interfaces/fees.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-template',
  templateUrl: './fees-template.component.html',
  styleUrls: ['./fees-template.component.scss'],
})
export class FeesTemplateComponent implements OnInit {

  @Input() feesContent: Fees[];
  @Input() feesType: string;

  showMore = false;

  constructor() { }

  ngOnInit() {}

}
