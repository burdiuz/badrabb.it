import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Directive({
  selector: 'img[setLocale]',
})
export class ImageSetLocaleDirective implements OnInit {
  @Input() setLocale: string;

  constructor(private _el: ElementRef, protected _translate: TranslateService) {
  }

  public ngOnInit() {
    this.setLocaleHandler(this.setLocale);
  }

  protected setLocaleHandler = (locale: string): void => {
    const {nativeElement} = this._el;
    this._translate.get(`@@language.${locale}.icon`)
      .first()
      .subscribe((value: string) => {
        nativeElement.src = value;
      });
    this._translate.get(`@@language.${locale}.title`)
      .first()
      .subscribe((value: string) => {
        nativeElement.alt = value;
        nativeElement.title = value;
      });
  };
}
