import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {


  @Input() className: string;
  @Input() id: string;
  @Input() anchor: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

  get containerClassName(): string {
    return this.className || this.anchor || '';
  }

  get containerId(): string {
    return this.id || this.anchor || '';
  }

}
