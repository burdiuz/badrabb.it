import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

const getLocalizedProperty = (target: Object, property: string, locale: string): string => {
  if (!target || !locale) {
    return undefined;
  }
  return target[locale] && target[locale][property] ? target[locale][property] : target[property];
};

@Component({
  selector: 'localized-product-card',
  templateUrl: './localized-product-card.component.html',
  styleUrls: ['./localized-product-card.component.css']
})
export class LocalizedProductCardComponent implements OnInit {

  @Input() position: string;
  @Input() product: any;

  constructor(private _translation: TranslateService) {
  }

  ngOnInit() {
  }

  getProperty(property: string): any {
    if (!this._translation) {
      return undefined;
    }
    return getLocalizedProperty(this.product, property, this._translation.currentLang);
  }

  get id(): string {
    return this.getProperty('id');
  }

  get imageUrl(): string {
    const promo = this.getProperty('promo');
    return promo ? promo.originalUrl : '';
  }

  get type(): string {
    return this.getProperty('type');
  }

  get subType(): string {
    return this.getProperty('subType');
  }

  get description(): string {
    return this.getProperty('description');
  }

}
