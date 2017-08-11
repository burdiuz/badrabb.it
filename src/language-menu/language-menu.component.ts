import {Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {AVAILABLE_LOCALES, DEFAULT_LOCALE} from '../languages';

@Component({
  selector: 'language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})
export class LanguageMenuComponent implements OnInit {

  available: Array<string> = [...AVAILABLE_LOCALES];
  current: string = DEFAULT_LOCALE;

  constructor(private _translate: TranslateService) {
  }

  ngOnInit() {
    this.current = this._translate.currentLang;
    this._translate.onLangChange.subscribe(this.langChangeHandler);
  }

  langChangeHandler = (event: LangChangeEvent) => {
    this.current = event.lang;
  }

  isCurrentLang(code: string) {
    return code !== this.current;
  }

  changeLang(code: string) {
    this._translate.use(code);
  }
}
