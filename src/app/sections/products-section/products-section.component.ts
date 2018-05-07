import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../products.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  data: any = {list: {}};
  currentLocale: string;

  constructor(private _products: ProductsService, private _translate: TranslateService) {
  }

  ngOnInit() {
    this.currentLocale = this._translate.currentLang;
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLocale = event.lang;
    });
    this._products.list().subscribe((data: any) => {
      this.data = data;
    });
  }

  get products() {
    if (this.currentLocale && this.data && this.data.list) {
      return this.data.list[this.currentLocale] || [];
    }
    return [];
  }

  getCardPosition(even: boolean): string {
    return even ? 'right' : 'left';
  }
}
