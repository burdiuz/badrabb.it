import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextPageService } from '../../../text-page.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() {
  }

  data: any = { title: String, content: String };
  currentLocale: string;

  constructor(private _text: TextPageService, private _route: ActivatedRoute, private _translate: TranslateService) {
  }

  ngOnInit() {
    console.log('ROUTE:');
    console.log(this._route);

    this.currentLocale = this._translate.currentLang;
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLocale = event.lang;
    });
    this._text.get('about').subscribe((data: any) => {
      this.data = data;
    });
  }

  get title() {
    if (this.currentLocale && this.data && this.data[this.currentLocale]) {
      return this.data[this.currentLocale].title;
    }

    return '';
  }

  get content() {
    if (this.currentLocale && this.data && this.data[this.currentLocale]) {
      return this.data[this.currentLocale].content;
    }

    return '';
  }
}
