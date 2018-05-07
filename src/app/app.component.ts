import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../languages';

declare const $: (...args: any[]) => any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _translate: TranslateService) {
  }

  ngOnInit() {
    this._translate.setDefaultLang(DEFAULT_LOCALE);
    this._translate.addLangs([...AVAILABLE_LOCALES]);
    this._translate.use(DEFAULT_LOCALE);
  }

  onRouteActivate(event: any) {
    console.log('activate', event);
  }

  onRouteDeactivate(event: any) {
    console.log('deactivate', event);
  }
}
