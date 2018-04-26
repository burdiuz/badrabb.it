import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'localized-section',
  templateUrl: './localized-section.component.html',
  styleUrls: ['./localized-section.component.css']
})
export class LocalizedSectionComponent implements OnInit {

  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

  getTitleLocalizationMark () {
    return `@@section.${this.label}.title`;
  }

}
