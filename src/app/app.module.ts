import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { MobileMenuToggleComponent } from './mobile-menu-toggle/mobile-menu-toggle.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { WhereToBuyPageComponent } from './pages/where-to-buy-page/where-to-buy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwoColumnsSectionComponent } from './two-columns-section/two-columns-section.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { TextPageComponent } from './text-page/text-page.component';
import { TextPageService } from '../text-page.service';
import { ProductsService } from '../products.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: HomePageComponent },
  { path: 'product/:id/:name', component: ProductDetailPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'where', component: HomePageComponent },
  { path: 'contacts', component: HomePageComponent },
  { path: '**',   redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    MobileMenuToggleComponent,
    AppHeaderComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    AboutPageComponent,
    ContactsPageComponent,
    WhereToBuyPageComponent,
    HomePageComponent,
    TwoColumnsSectionComponent,
    TextPageComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    TextPageService,
    ProductsService,
    TranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
