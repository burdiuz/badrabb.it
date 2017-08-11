import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdMenuModule,
  MdCardModule,
  MdTableModule,
} from '@angular/material';

import {AppComponent} from './app.component';
import 'hammerjs';
import {ProductCardComponent} from '../product-card/product-card.component';
import {LanguageMenuComponent} from '../language-menu/language-menu.component';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ImageLocaleDirective} from '../image-locale.directive';
import {ImageSetLocaleDirective} from '../image-set-locale.directive';
import {PageComponent} from '../page/page.component';
import {LocalizedSectionComponent} from './localized-section/localized-section.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ProductsSectionComponent} from './products-section/products-section.component';
import {LocalizedProductCardComponent} from './localized-product-card/localized-product-card.component';
import {ProductsService} from '../products.service';
import { PageSectionComponent } from '../page-section/page-section.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const TranslateModuleImpl = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    LanguageMenuComponent,
    ProductCarouselComponent,
    ImageLocaleDirective,
    ImageSetLocaleDirective,
    PageComponent,
    LocalizedSectionComponent,
    ToolbarComponent,
    ProductsSectionComponent,
    LocalizedProductCardComponent,
    PageSectionComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModuleImpl,
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdMenuModule,
    MdCardModule,
    MdTableModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
