import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextPageService } from '../../../text-page.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css']
})
export class TextPageComponent implements OnInit {

  data: any = { title: String, content: String };
  _currentLocale: string;

  constructor(private _text: TextPageService, private _route: ActivatedRoute, private _translate: TranslateService) {
  }

  ngOnInit() {
    this._route.url.subscribe(([{ path }]) =>
      this._text.get(path).subscribe((data: any) => {
        this.data = data;
      }));

    this._currentLocale = this._translate.currentLang;
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this._currentLocale = event.lang;
    });
  }

  get currentLocale() {
    return this._currentLocale || 'en-US';
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

