import { HomeworkData } from './../shared/interfaces/homework.model';
import { Component, OnInit } from '@angular/core';
import { Homework } from '../shared/interfaces/homework.model';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {

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
    },
    {
      date: 'Aug 22, 2002',
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
    },
    {
      date: 'Jun 16, 2002',
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
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
