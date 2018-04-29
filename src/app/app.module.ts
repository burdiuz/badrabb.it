import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { MobileMenuToggleComponent } from './mobile-menu-toggle/mobile-menu-toggle.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { WhereToBuyPageComponent } from './pages/where-to-buy-page/where-to-buy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwoColumnsSectionComponent } from './two-columns-section/two-columns-section.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { TextPageComponent } from './pages/text-page/text-page.component';
import { TextPageService } from '../text-page.service';
import { ProductsService } from '../products.service';
import { HtmlPipe } from '../html.pipe';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: HomePageComponent },
  { path: 'product/:id/:name', component: ProductDetailPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'about', component: TextPageComponent },
  { path: 'where', component: HomePageComponent },
  { path: 'contacts', component: HomePageComponent },
  { path: '**',   redirectTo: '' }
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
    ProductDetailPageComponent,
    ContactsPageComponent,
    WhereToBuyPageComponent,
    HomePageComponent,
    TwoColumnsSectionComponent,
    TextPageComponent,
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
