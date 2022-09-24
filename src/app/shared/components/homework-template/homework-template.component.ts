import { Component, Input, OnInit } from '@angular/core';
import { HomeworkData } from '../../interfaces/homework.model';

@Component({
  selector: 'app-homework-template',
  templateUrl: './homework-template.component.html',
  styleUrls: ['./homework-template.component.scss'],
})
export class HomeworkTemplateComponent implements OnInit {

  @Input() homeworkHolder: HomeworkData[];

  constructor() { }

  ngOnInit() {}

}
