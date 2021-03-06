import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import PreloaderComponent from './preloader';
import MobileMenuToggleComponent from './mobile-menu-toggle';
import AppHeaderComponent from './app-header';
import LocalizedProductCardComponent from './localized-product-card';
import ProductCardComponent from '../product-card';
import { TextPageService } from '../text-page.service';
import { ProductsService } from '../products.service';
import { HtmlPipe } from '../html.pipe';

import ProductsSectionComponent from './sections/products-section';
import ContactsSectionComponent from './sections/contacts-section';
import LocalizedSectionComponent from './sections/localized-section';
import PageSectionComponent from '../page-section';
import TwoColumnsSectionComponent from './sections/two-columns-section';
import LogoSectionComponent from './sections/logo-section';

import PageComponent from '../page';
import ContactsPageComponent from './pages/contacts-page';
import WhereToBuyPageComponent from './pages/where-to-buy-page';
import HomePageComponent from './pages/home-page';
import ProductDetailPageComponent from './pages/product-detail-page';
import TextPageComponent from './pages/text-page';
import ProductsPageComponent from './pages/products-page';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: HomePageComponent },
  { path: 'product/:id/:name', component: ProductDetailPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'about', component: TextPageComponent },
  { path: 'where', component: HomePageComponent },
  { path: 'contacts', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];

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
    PreloaderComponent,
    MobileMenuToggleComponent,
    AppHeaderComponent,
    ProductsPageComponent,
    ProductsSectionComponent,
    LocalizedProductCardComponent,
    ContactsSectionComponent,
    LocalizedSectionComponent,
    ProductCardComponent,
    PageSectionComponent,
    ProductDetailPageComponent,
    ContactsPageComponent,
    WhereToBuyPageComponent,
    HomePageComponent,
    TwoColumnsSectionComponent,
    TextPageComponent,
    LogoSectionComponent,
    HtmlPipe,
  ],
  imports: [
    BrowserModule,
    TranslateModuleImpl,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    TextPageService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
