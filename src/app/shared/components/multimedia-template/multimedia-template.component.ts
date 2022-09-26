import { Pdf, Image, Video, Link } from './../../interfaces/multimedia.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-template',
  templateUrl: './multimedia-template.component.html',
  styleUrls: ['./multimedia-template.component.scss'],
})
export class MultimediaTemplateComponent implements OnInit {


  @Input() documentHolder: Pdf[];
  @Input() imageHolder: Image[];
  @Input() videoHolder: Video[];
  @Input() linkHolder: Link[];
  @Input() displayType: string;

  constructor() { }

  ngOnInit() {}

}
