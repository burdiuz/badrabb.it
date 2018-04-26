import {Component, OnInit} from '@angular/core';


const CONTACTS = ['twitter', 'facebook', 'instagram', 'email', 'phone'];

@Component({
  selector: 'contacts-section',
  templateUrl: './contacts-section.component.html',
  styleUrls: ['./contacts-section.component.css']
})
export class ContactsSectionComponent implements OnInit {

  public contacts: Array<string>;

  constructor() {
    this.contacts = [...CONTACTS];
  }

  ngOnInit() {
  }

  getContactTitleMark(type) {
    return `@@contacts.${type}.title`;
  }

  getContactHrefMark(type) {
    return `@@contacts.${type}.href`;
  }

  getContactContentMark(type) {
    return `@@contacts.${type}.content`;
  }
}
