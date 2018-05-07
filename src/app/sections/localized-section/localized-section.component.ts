import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'localized-section',
  templateUrl: './localized-section.component.html',
  styleUrls: ['./localized-section.component.css']
})
export class LocalizedSectionComponent implements OnInit {

  @Input() label: string;
  @Input() isContainer: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  getTitleLocalizationMark() {
    return `@@section.${this.label}.title`;
  }

}
