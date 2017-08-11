import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {

  @Input() anchor: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
