import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { ProductsService } from '../../../products.service';

declare const $: (...args: any[]) => any;

const getLocalizedProperty = (target: Object, property: string, locale: string): string => {
  if (!target || !locale) {
    return undefined;
  }
  return target[locale] && target[locale][property] ? target[locale][property] : target[property];
};

@Component({
  selector: 'product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit, AfterViewChecked {

  product: any = {};
  currentLocale: string;


  constructor(
    private _products: ProductsService,
    private _translate: TranslateService,
    private _route: ActivatedRoute,
  ) {
    $(window).scrollTop(0);
  }

  ngOnInit() {
    this.currentLocale = this._translate.currentLang;
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLocale = event.lang;
    });

    this._route.url.subscribe(([base, { path: id }]) =>
      this._products.get(id).subscribe((data: any) => {
        this.product = data;
      }));
  }

  ngAfterViewChecked () {
  }

  getProperty(property: string): any {
    if (!this._translate) {
      return undefined;
    }
    return getLocalizedProperty(this.product, property, this._translate.currentLang);
  }

  get images() {
    return this.getProperty('images') || [];
  }

  get description() {
    return this.getProperty('description');
  }

  get type() {
    return this.getProperty('type');
  }

  get subType() {
    return this.getProperty('subType');
  }

  get promo() {
    return this.getProperty('promo');
  }

}
