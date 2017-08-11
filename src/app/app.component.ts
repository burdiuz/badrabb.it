import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AVAILABLE_LOCALES, DEFAULT_LOCALE} from '../languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _translate: TranslateService) {
  }

  ngOnInit() {
    this._translate.setDefaultLang(DEFAULT_LOCALE);
    this._translate.addLangs([...AVAILABLE_LOCALES]);
    this._translate.use(DEFAULT_LOCALE);
  }
}
