import {Directive, ElementRef, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ImageSetLocaleDirective} from './image-set-locale.directive';
import 'rxjs/Rx';

@Directive({
  selector: 'img[locale]',
})
export class ImageLocaleDirective extends ImageSetLocaleDirective implements OnInit {
  constructor(el: ElementRef, translate: TranslateService) {
    super(el, translate);
  }

  public ngOnInit() {
    this._translate.onLangChange.subscribe(this.onLangChangeHandler);
    this.setLocaleHandler(this._translate.currentLang);
  }

  private onLangChangeHandler = (event: LangChangeEvent) => {
    this.setLocaleHandler(event.lang);
  };
}
