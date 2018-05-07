webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-header/app-header.component.css":
/***/ (function(module, exports) {

module.exports = "header .header__wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  padding: 25px 0;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  margin-bottom: 0;\n}\n\nheader .header__wrap.sub-menu-active {\n  margin-bottom: 100px;\n}\n\nheader .header__wrap .header__menu {\n  width: 100%;\n  padding: 0;\n}\n\nheader .header__wrap .header__menu ul {\n  list-style: none;\n  text-align: center;\n  margin: 0;\n  vertical-align: middle;\n}\n\nheader .header__wrap .header__menu ul li {\n  margin: 0;\n  text-align: center;\n  display: inline-block;\n  padding: 0 10px;\n}\n\nheader .header__wrap .header__menu ul li a {\n  color: #fff;\n  font-weight: 500;\n  line-height: 36px;\n  display: inline-block;\n  text-transform: uppercase;\n  position: relative;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  letter-spacing: 1.4px;\n}\n\nheader .header__wrap .header__menu ul li:hover a {\n  color: #dc041e;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children a, header .header__wrap .header__menu .menu-item-has-children li {\n  -webkit-transition: all .4s;\n  transition: all .4s;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children ul {\n  width: 100%;\n  left: 0;\n  top: 100%;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  display: none;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children ul li {\n  padding: 0;\n  min-width: 260px;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children ul li a {\n  padding: 25px;\n  width: 100%;\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 2px;\n  text-transform: none;\n  text-align: left;\n  color: #2e2e36 !important;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children ul li a span {\n  color: #2e2e36;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 1.4px;\n}\n\nheader .header__wrap .header__menu .menu-item-has-children.active > a {\n  color: #dc041e\n}\n\nheader .header__wrap .header__menu .menu-item-has-children.active ul li:hover {\n  background-color: rgba(225, 226, 230, .4)\n}\n\nheader .header__wrap .mobile_menu {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .9);\n  z-index: 50;\n  right: 0;\n  top: 0;\n  display: none;\n}\n\nheader .header__wrap .mobile_menu li, header .header__wrap .mobile_menu ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0\n}\n\nheader .header__wrap .mobile_menu > ul {\n  height: 100%;\n  overflow-y: auto;\n  padding: 50px 0 15px;\n  text-align: center;\n  -webkit-animation-duration: .01s;\n  animation-duration: 10ms;\n}\n\nheader .header__wrap .mobile_menu > ul a {\n  color: #fff;\n  display: block;\n  text-transform: uppercase;\n  font-size: 16px;\n  opacity: 0;\n  position: relative;\n  height: 50px;\n  outline: 0;\n  line-height: 50px;\n}\n\nheader .header__wrap .mobile_menu > ul a:hover {\n  background-color: rgba(255, 255, 255, .08);\n}\n\nheader .header__wrap .mobile_menu > ul .sub-menu a {\n  font-size: 12px;\n}\n\nheader .header__wrap .mobile_menu > ul .sub-menu a span {\n  display: none;\n}\n\nheader.animateIt {\n  position: fixed;\n  top: -1000px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  -webkit-transition: .6s top cubic-bezier(.3, .73, .3, .74);\n  transition: .6s top cubic-bezier(.3, .73, .3, .74);\n  background-color: #2e2e36;\n  z-index: 10 !important;\n  width: 100% !important;\n  -webkit-transition: all .4s;\n  transition: all .4s;\n}\n\nheader.animateIt .btn-dark {\n  border: #fff\n}\n\nheader.animateIt:focus {\n  border: 3px solid #fff\n}\n\nheader.animateIt .header__wrap .header__menu .menu-item-has-children ul li a {\n  color: #fff !important\n}\n\nheader.animateIt .header__wrap .header__menu .menu-item-has-children ul li a span {\n  color: #fff\n}\n\nheader.animateIt .header__wrap .header__menu ul li a {\n  color: #fff\n}\n\nheader.animateIt .header__wrap .header__menu ul li a.active > a {\n  color: #fff\n}\n\nheader.animateIt .header__wrap .header__menu ul li a:hover a {\n  color: #fff\n}\n\nbody.down header.animateIt {\n  top: 0\n}\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\" data-link-target=\"#/\">\n    <div class=\"header__wrap\">\n      <nav class=\"menu header__menu\" style=\"\">\n        <ul>\n          <li><a [routerLink]=\"['']\" (click)=\"onMenuItemClick()\">Home</a></li>\n          <li><a [routerLink]=\"['about']\" (click)=\"onMenuItemClick()\">About us</a></li>\n          <li><a [routerLink]=\"['products']\" (click)=\"onMenuItemClick()\">Products</a></li>\n          <li><a [routerLink]=\"['where']\" (click)=\"onMenuItemClick()\">Where to buy?</a></li>\n          <li><a [routerLink]=\"['contacts']\" (click)=\"onMenuItemClick()\">Contacts</a></li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
        var _this = this;
        this.onWindowResize = function () {
            if ($(window).width() < 768) {
                $('.menu').removeClass('header__menu');
                $('.menu').addClass('mobile_menu');
                $('.menu').hide();
                _this.initMobileMenuItems();
            }
            else {
                $('.menu').removeClass('mobile_menu');
                $('.menu').addClass('header__menu');
                $('.menu').show();
            }
        };
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(this.onWindowResize);
        this.onWindowResize();
        $('.menu a').click(function () {
            var elementClick = $(this).attr('href');
            var target = $("[data-link-target=\"" + elementClick + "\"]");
            var scrollTo = function (scrollTop, timeout) {
                var elem = $('html:not(:animated),body:not(:animated)');
                elem.stop();
                elem.animate({ scrollTop: scrollTop }, {
                    duration: timeout,
                    step: function () {
                        var destination = target.offset().top;
                        console.log('STEP!!!!');
                        if (destination - 10 > scrollTop) {
                        }
                    },
                });
            };
            if (target.length) {
                var maxTimeout_1 = 1000;
                var destination_1 = target.offset().top;
                setTimeout(function () {
                    var currentDestination = target.offset().top;
                    if (currentDestination > destination_1) {
                        scrollTo(currentDestination, maxTimeout_1 * 0.5);
                    }
                }, maxTimeout_1 / 2);
                scrollTo(destination_1, maxTimeout_1);
                return false;
            }
            return true;
        });
        $('.animation_1').animated('fadeIn');
        $('.animation_2').animated('fadeInLeft');
        $('.animation_3').animated('fadeInRight');
        $('.animation_4').animated('zoomIn');
        $('.animation_5').animated('fadeInUp');
        $('.animation_6').animated('tada');
        $('.animation_7').animated('flash');
    };
    AppHeaderComponent.prototype.initMobileMenuItems = function () {
        var n = 0;
        var menu_list = $('.mobile_menu ul').find('li');
        $(menu_list).each(function () {
            $(this).find('a').css('animation-delay', "." + n + "s");
            n++;
        });
    };
    AppHeaderComponent.prototype.onMenuItemClick = function () {
        var mobileMenu = $('.mobile_menu');
        if (mobileMenu.length) {
            $('.mobile_menu').fadeOut(600);
            $('.sandwich').toggleClass('active');
        }
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/app-header/app-header.component.html"),
            styles: [__webpack_require__("./src/app/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__("./src/app/app-header/app-header.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__app_header_component__["a" /* AppHeaderComponent */]);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<preloader></preloader>\n\n<mobile-menu-toggle></mobile-menu-toggle>\n\n<app-header></app-header>\n\n<router-outlet (activate)=\"onRouteActivate($event)\" (deactivate)=\"onRouteDeactivate($event)\"></router-outlet>\n\n<div class=\"hidden\"></div>\n\n<div class=\"where_wrap\">\n  <two-columns-section>\n    <where-to-buy-page data-link-target=\"#/where\"></where-to-buy-page>\n    <contacts-section data-link-target=\"#/contacts\"></contacts-section>\n  </two-columns-section>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages__ = __webpack_require__("./src/languages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_2__languages__["b" /* DEFAULT_LOCALE */]);
        this._translate.addLangs(__WEBPACK_IMPORTED_MODULE_2__languages__["a" /* AVAILABLE_LOCALES */].slice());
        this._translate.use(__WEBPACK_IMPORTED_MODULE_2__languages__["b" /* DEFAULT_LOCALE */]);
    };
    AppComponent.prototype.onRouteActivate = function (event) {
        console.log('activate', event);
    };
    AppComponent.prototype.onRouteDeactivate = function (event) {
        console.log('deactivate', event);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preloader__ = __webpack_require__("./src/app/preloader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mobile_menu_toggle__ = __webpack_require__("./src/app/mobile-menu-toggle/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_header__ = __webpack_require__("./src/app/app-header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__localized_product_card__ = __webpack_require__("./src/app/localized-product-card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_card__ = __webpack_require__("./src/product-card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_page_service__ = __webpack_require__("./src/text-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_service__ = __webpack_require__("./src/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__html_pipe__ = __webpack_require__("./src/html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sections_products_section__ = __webpack_require__("./src/app/sections/products-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sections_contacts_section__ = __webpack_require__("./src/app/sections/contacts-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sections_localized_section__ = __webpack_require__("./src/app/sections/localized-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_section__ = __webpack_require__("./src/page-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sections_two_columns_section__ = __webpack_require__("./src/app/sections/two-columns-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sections_logo_section__ = __webpack_require__("./src/app/sections/logo-section/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contacts_page__ = __webpack_require__("./src/app/pages/contacts-page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_where_to_buy_page__ = __webpack_require__("./src/app/pages/where-to-buy-page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_page__ = __webpack_require__("./src/app/pages/home-page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_product_detail_page__ = __webpack_require__("./src/app/pages/product-detail-page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_text_page__ = __webpack_require__("./src/app/pages/text-page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_products_page__ = __webpack_require__("./src/app/pages/products-page/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_24__pages_home_page__["a" /* default */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_24__pages_home_page__["a" /* default */] },
    { path: 'product/:id/:name', component: __WEBPACK_IMPORTED_MODULE_25__pages_product_detail_page__["a" /* default */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_25__pages_product_detail_page__["a" /* default */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_26__pages_text_page__["a" /* default */] },
    { path: 'where', component: __WEBPACK_IMPORTED_MODULE_24__pages_home_page__["a" /* default */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_24__pages_home_page__["a" /* default */] },
    { path: '**', redirectTo: '' }
];
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var TranslateModuleImpl = __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
    loader: {
        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
        useFactory: HttpLoaderFactory,
        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]],
    },
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__preloader__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_9__mobile_menu_toggle__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_10__app_header__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_27__pages_products_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_16__sections_products_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_11__localized_product_card__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_17__sections_contacts_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_18__sections_localized_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_12__product_card__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_19__page_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_25__pages_product_detail_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contacts_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_23__pages_where_to_buy_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_20__sections_two_columns_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_26__pages_text_page__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_21__sections_logo_section__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_15__html_pipe__["a" /* HtmlPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                TranslateModuleImpl,
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__text_page_service__["a" /* TextPageService */],
                __WEBPACK_IMPORTED_MODULE_14__products_service__["a" /* ProductsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/localized-product-card/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localized_product_card_component__ = __webpack_require__("./src/app/localized-product-card/localized-product-card.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__localized_product_card_component__["a" /* LocalizedProductCardComponent */]);


/***/ }),

/***/ "./src/app/localized-product-card/localized-product-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/localized-product-card/localized-product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<product-card\n  [id]=\"id\"\n  [position]=\"position\"\n  [imageUrl]=\"imageUrl\"\n  [type]=\"type\"\n  [subType]=\"subType\"\n  [description]=\"description\">\n  <ng-content></ng-content>\n</product-card>\n"

/***/ }),

/***/ "./src/app/localized-product-card/localized-product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizedProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var getLocalizedProperty = function (target, property, locale) {
    if (!target || !locale) {
        return undefined;
    }
    return target[locale] && target[locale][property] ? target[locale][property] : target[property];
};
var LocalizedProductCardComponent = /** @class */ (function () {
    function LocalizedProductCardComponent(_translation) {
        this._translation = _translation;
    }
    LocalizedProductCardComponent.prototype.ngOnInit = function () {
    };
    LocalizedProductCardComponent.prototype.getProperty = function (property) {
        if (!this._translation) {
            return undefined;
        }
        return getLocalizedProperty(this.product, property, this._translation.currentLang);
    };
    Object.defineProperty(LocalizedProductCardComponent.prototype, "id", {
        get: function () {
            return this.getProperty('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizedProductCardComponent.prototype, "imageUrl", {
        get: function () {
            var promo = this.getProperty('promo');
            return promo ? promo.originalUrl : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizedProductCardComponent.prototype, "type", {
        get: function () {
            return this.getProperty('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizedProductCardComponent.prototype, "subType", {
        get: function () {
            return this.getProperty('subType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizedProductCardComponent.prototype, "description", {
        get: function () {
            return this.getProperty('description');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LocalizedProductCardComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LocalizedProductCardComponent.prototype, "product", void 0);
    LocalizedProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'localized-product-card',
            template: __webpack_require__("./src/app/localized-product-card/localized-product-card.component.html"),
            styles: [__webpack_require__("./src/app/localized-product-card/localized-product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LocalizedProductCardComponent);
    return LocalizedProductCardComponent;
}());



/***/ }),

/***/ "./src/app/mobile-menu-toggle/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobile_menu_toggle_component__ = __webpack_require__("./src/app/mobile-menu-toggle/mobile-menu-toggle.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mobile_menu_toggle_component__["a" /* MobileMenuToggleComponent */]);


/***/ }),

/***/ "./src/app/mobile-menu-toggle/mobile-menu-toggle.component.css":
/***/ (function(module, exports) {

module.exports = ".toggle_mnu {\n  width: 60px;\n  height: 60px;\n  position: fixed;\n  z-index: 110;\n  border: none;\n  cursor: pointer;\n  right: 10px;\n  top: 0;\n  background-color: rgba(171, 153, 153, 0)\n}\n\n.toggle_mnu:focus {\n  outline: 0\n}\n\n.toggle_mnu span {\n  display: block\n}\n\n.toggle_mnu > span > span {\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .7);\n  box-shadow: 0 0 4px rgba(0, 0, 0, .7)\n}\n\n@media only screen and (min-width: 768px) {\n  .toggle_mnu {\n    display: none\n  }\n}\n\n.sandwich {\n  width: 28px;\n  height: 28px;\n  position: absolute;\n  top: 8px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 200\n}\n\n.sw-topper {\n  position: relative;\n  top: 0;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  border: none;\n  border-radius: 4px 4px 4px 4px;\n  -webkit-transition: -webkit-transform .5s, top .2s;\n  -webkit-transition: top .2s, -webkit-transform .5s;\n  transition: top .2s, -webkit-transform .5s;\n  transition: transform .5s, top .2s;\n  transition: transform .5s, top .2s, -webkit-transform .5s;\n  display: block\n}\n\n.sw-bottom {\n  position: relative;\n  width: 28px;\n  height: 3px;\n  top: 6.6px;\n  background: #fff;\n  border: none;\n  border-radius: 4px 4px 4px 4px;\n  -webkit-transition: -webkit-transform .5s, top .2s;\n  -webkit-transition: top .2s, -webkit-transform .5s;\n  transition: top .2s, -webkit-transform .5s;\n  transition: transform .5s, top .2s;\n  transition: transform .5s, top .2s, -webkit-transform .5s;\n  -webkit-transition-delay: .2s, 0;\n  transition-delay: .2s, 0\n}\n\n.sw-footer {\n  position: relative;\n  width: 28px;\n  height: 3px;\n  top: 13.5px;\n  background: #fff;\n  border: none;\n  border-radius: 4px 4px 4px 4px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  -webkit-transition-delay: .1s;\n  transition-delay: .1s\n}\n\n.sandwich.active .sw-topper {\n  top: 9px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg)\n}\n\n.sandwich.active .sw-bottom {\n  top: 6px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg)\n}\n\n.sandwich.active .sw-footer {\n  opacity: 0;\n  top: 0;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg)\n}\n"

/***/ }),

/***/ "./src/app/mobile-menu-toggle/mobile-menu-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"toggle_mnu\">\n\t\t<span class=\"sandwich\">\n\t\t\t<span class=\"sw-topper\"></span>\n\t\t\t<span class=\"sw-bottom\"></span>\n\t\t\t<span class=\"sw-footer\"></span>\n\t\t</span>\n</button>\n"

/***/ }),

/***/ "./src/app/mobile-menu-toggle/mobile-menu-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenuToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileMenuToggleComponent = /** @class */ (function () {
    function MobileMenuToggleComponent() {
        var _this = this;
        this.menuTopHeight = 0;
        this.onToggleMenuClick = function () {
            $('.sandwich').toggleClass('active');
            $('header.sticky').toggleClass('mobile_menu_active');
            _this.menuTopHeight = $(window).scrollTop();
            if ($('.mobile_menu').is(':visible')) {
                $('.mobile_menu').fadeOut(600);
                $('.mobile_menu li a').removeClass('fadeInUp animated');
            }
            else {
                $('.mobile_menu').fadeIn(600);
                $('.mobile_menu li a').addClass('fadeInUp animated');
            }
        };
        this.onMobileMenuItemClick = function () {
            $('.mobile_menu').fadeOut(600);
            $('.sandwich').toggleClass('active');
        };
        this.onWindowResize = function () {
            if ($(window).width() < 768) {
                $('.sandwich').removeClass('active');
            }
            else {
                $('.sandwich').addClass('active');
            }
        };
    }
    MobileMenuToggleComponent.prototype.ngOnInit = function () {
    };
    MobileMenuToggleComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(this.onWindowResize);
        this.onWindowResize();
        $('.toggle_mnu').click(this.onToggleMenuClick);
        this.listenMobileMenu();
    };
    MobileMenuToggleComponent.prototype.listenMobileMenu = function () {
        $('.mobile_menu ul a').on('click', this.onMobileMenuItemClick);
    };
    MobileMenuToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mobile-menu-toggle',
            template: __webpack_require__("./src/app/mobile-menu-toggle/mobile-menu-toggle.component.html"),
            styles: [__webpack_require__("./src/app/mobile-menu-toggle/mobile-menu-toggle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileMenuToggleComponent);
    return MobileMenuToggleComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts-page/contacts-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contacts-page/contacts-page.component.html":
/***/ (function(module, exports) {

module.exports = "<contacts-section [isContainer]=\"true\"></contacts-section>\n"

/***/ }),

/***/ "./src/app/pages/contacts-page/contacts-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsPageComponent = /** @class */ (function () {
    function ContactsPageComponent() {
    }
    ContactsPageComponent.prototype.ngOnInit = function () {
    };
    ContactsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contacts-page',
            template: __webpack_require__("./src/app/pages/contacts-page/contacts-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/contacts-page/contacts-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsPageComponent);
    return ContactsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacts_page_component__ = __webpack_require__("./src/app/pages/contacts-page/contacts-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__contacts_page_component__["a" /* ContactsPageComponent */]);


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<logo-section></logo-section>\n\n<products-page data-link-target=\"#/products\"></products-page>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__("./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_page_component__ = __webpack_require__("./src/app/pages/home-page/home-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__home_page_component__["a" /* HomePageComponent */]);


/***/ }),

/***/ "./src/app/pages/product-detail-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_page_component__ = __webpack_require__("./src/app/pages/product-detail-page/product-detail-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__product_detail_page_component__["a" /* ProductDetailPageComponent */]);


/***/ }),

/***/ "./src/app/pages/product-detail-page/product-detail-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product-detail-page/product-detail-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"product_page\" class=\"product_page\">\n  <div class=\"container\">\n    <ng-container *ngFor=\"let image of images\">\n      <a [href]=\"image.originalUrl\" data-fancybox=\"\" class=\"prod_image\">\n        <img [src]=\"image.iconUrl\" alt=\"\" style=\"width: 400px; max-width: 100%\">\n      </a>\n    </ng-container>\n    <h2>{{subType || type}}</h2>\n    <span [innerHTML]=\"description\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-detail-page/product-detail-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__("./src/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var getLocalizedProperty = function (target, property, locale) {
    if (!target || !locale) {
        return undefined;
    }
    return target[locale] && target[locale][property] ? target[locale][property] : target[property];
};
var ProductDetailPageComponent = /** @class */ (function () {
    function ProductDetailPageComponent(_products, _translate, _route) {
        this._products = _products;
        this._translate = _translate;
        this._route = _route;
        this.product = {};
        $(window).scrollTop(0);
    }
    ProductDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLocale = this._translate.currentLang;
        this._translate.onLangChange.subscribe(function (event) {
            _this.currentLocale = event.lang;
        });
        this._route.url.subscribe(function (_a) {
            var base = _a[0], id = _a[1].path;
            return _this._products.get(id).subscribe(function (data) {
                _this.product = data;
            });
        });
    };
    ProductDetailPageComponent.prototype.ngAfterViewChecked = function () {
    };
    ProductDetailPageComponent.prototype.getProperty = function (property) {
        if (!this._translate) {
            return undefined;
        }
        return getLocalizedProperty(this.product, property, this._translate.currentLang);
    };
    Object.defineProperty(ProductDetailPageComponent.prototype, "images", {
        get: function () {
            return this.getProperty('images') || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductDetailPageComponent.prototype, "description", {
        get: function () {
            return this.getProperty('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductDetailPageComponent.prototype, "type", {
        get: function () {
            return this.getProperty('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductDetailPageComponent.prototype, "subType", {
        get: function () {
            return this.getProperty('subType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductDetailPageComponent.prototype, "promo", {
        get: function () {
            return this.getProperty('promo');
        },
        enumerable: true,
        configurable: true
    });
    ProductDetailPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-detail-page',
            template: __webpack_require__("./src/app/pages/product-detail-page/product-detail-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/product-detail-page/product-detail-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductDetailPageComponent);
    return ProductDetailPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_page_component__ = __webpack_require__("./src/app/pages/products-page/products-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__products_page_component__["a" /* ProductsPageComponent */]);


/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.html":
/***/ (function(module, exports) {

module.exports = "<products-section label=\"products\"></products-section>\n"

/***/ }),

/***/ "./src/app/pages/products-page/products-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsPageComponent = /** @class */ (function () {
    function ProductsPageComponent() {
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    ProductsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'products-page',
            template: __webpack_require__("./src/app/pages/products-page/products-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/products-page/products-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsPageComponent);
    return ProductsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/text-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_page_component__ = __webpack_require__("./src/app/pages/text-page/text-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__text_page_component__["a" /* TextPageComponent */]);


/***/ }),

/***/ "./src/app/pages/text-page/text-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/text-page/text-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"text\" class=\"page text\">\n  <div class=\"container\" [innerHTML]=\"content | html\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/text-page/text-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_page_service__ = __webpack_require__("./src/text-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextPageComponent = /** @class */ (function () {
    function TextPageComponent(_text, _route, _translate) {
        this._text = _text;
        this._route = _route;
        this._translate = _translate;
        this.data = { title: String, content: String };
        $(window).scrollTop(0);
    }
    TextPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.url.subscribe(function (_a) {
            var path = _a[0].path;
            return _this._text.get(path).subscribe(function (data) {
                _this.data = data;
            });
        });
        this._currentLocale = this._translate.currentLang;
        this._translate.onLangChange.subscribe(function (event) {
            _this._currentLocale = event.lang;
        });
    };
    TextPageComponent.prototype.ngAfterViewChecked = function () {
    };
    Object.defineProperty(TextPageComponent.prototype, "currentLocale", {
        get: function () {
            return this._currentLocale || 'en-US';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextPageComponent.prototype, "title", {
        get: function () {
            if (this.currentLocale && this.data && this.data[this.currentLocale]) {
                return this.data[this.currentLocale].title;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextPageComponent.prototype, "content", {
        get: function () {
            if (this.currentLocale && this.data && this.data[this.currentLocale]) {
                return this.data[this.currentLocale].content;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    TextPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'text-page',
            template: __webpack_require__("./src/app/pages/text-page/text-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/text-page/text-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__text_page_service__["a" /* TextPageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], TextPageComponent);
    return TextPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/where-to-buy-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__where_to_buy_page_component__ = __webpack_require__("./src/app/pages/where-to-buy-page/where-to-buy-page.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__where_to_buy_page_component__["a" /* WhereToBuyPageComponent */]);


/***/ }),

/***/ "./src/app/pages/where-to-buy-page/where-to-buy-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/where-to-buy-page/where-to-buy-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"where\" class=\"where\">\n  <h2>Where to buy?</h2>\n  <p>Coming soon...</p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/where-to-buy-page/where-to-buy-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhereToBuyPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhereToBuyPageComponent = /** @class */ (function () {
    function WhereToBuyPageComponent() {
    }
    WhereToBuyPageComponent.prototype.ngOnInit = function () {
    };
    WhereToBuyPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'where-to-buy-page',
            template: __webpack_require__("./src/app/pages/where-to-buy-page/where-to-buy-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/where-to-buy-page/where-to-buy-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhereToBuyPageComponent);
    return WhereToBuyPageComponent;
}());



/***/ }),

/***/ "./src/app/preloader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloader_component__ = __webpack_require__("./src/app/preloader/preloader.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__preloader_component__["a" /* PreloaderComponent */]);


/***/ }),

/***/ "./src/app/preloader/preloader.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\n  background: none repeat scroll 0 0 #000;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n  overflow: hidden;\n}\n\n.loader .loader_inner {\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n"

/***/ }),

/***/ "./src/app/preloader/preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\n  <div class=\"pre_loader_inner\"></div>\n  <div class=\"loader_inner\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/preloader/preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent.prototype.ngAfterViewInit = function () {
        $('.loader_inner').fadeOut();
        $('.loader').delay(10).fadeOut('slow');
    };
    PreloaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'preloader',
            template: __webpack_require__("./src/app/preloader/preloader.component.html"),
            styles: [__webpack_require__("./src/app/preloader/preloader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/sections/contacts-section/contacts-section.component.css":
/***/ (function(module, exports) {

module.exports = ".contact-link {\n  margin-bottom: 1rem;\n  text-align: left;\n}\n\n.contact-link a,.contact-link a:visited {\n  font-size: 0.8rem;\n  color: #fff;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #666;\n          text-decoration-color: #666;\n  font-weight: 300;\n  margin-left: 1rem;\n}\n\n.contact-link a:hover {\n  -webkit-text-decoration-color: #ccc;\n          text-decoration-color: #ccc;\n}\n"

/***/ }),

/***/ "./src/app/sections/contacts-section/contacts-section.component.html":
/***/ (function(module, exports) {

module.exports = "<localized-section label=\"contacts\" [isContainer]=\"isContainer\">\n  <ng-container *ngFor=\"let type of contacts\">\n    <div class=\"item\">\n      <div class=\"text\" [translate]=\"getContactTitleMark(type)\"></div>\n      <a [href]=\"getContactHrefMark(type) | translate\" [translate]=\"getContactContentMark(type)\" class=\"link\"></a>\n    </div>\n  </ng-container>\n</localized-section>\n"

/***/ }),

/***/ "./src/app/sections/contacts-section/contacts-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CONTACTS = ['twitter', 'facebook', 'instagram', 'email'];
var ContactsSectionComponent = /** @class */ (function () {
    function ContactsSectionComponent() {
        this.isContainer = false;
        this.contacts = CONTACTS.slice();
    }
    ContactsSectionComponent.prototype.ngOnInit = function () {
    };
    ContactsSectionComponent.prototype.getContactTitleMark = function (type) {
        return "@@contacts." + type + ".title";
    };
    ContactsSectionComponent.prototype.getContactHrefMark = function (type) {
        return "@@contacts." + type + ".href";
    };
    ContactsSectionComponent.prototype.getContactContentMark = function (type) {
        return "@@contacts." + type + ".content";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContactsSectionComponent.prototype, "isContainer", void 0);
    ContactsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contacts-section',
            template: __webpack_require__("./src/app/sections/contacts-section/contacts-section.component.html"),
            styles: [__webpack_require__("./src/app/sections/contacts-section/contacts-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsSectionComponent);
    return ContactsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/contacts-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacts_section_component__ = __webpack_require__("./src/app/sections/contacts-section/contacts-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__contacts_section_component__["a" /* ContactsSectionComponent */]);


/***/ }),

/***/ "./src/app/sections/localized-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localized_section_component__ = __webpack_require__("./src/app/sections/localized-section/localized-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__localized_section_component__["a" /* LocalizedSectionComponent */]);


/***/ }),

/***/ "./src/app/sections/localized-section/localized-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/localized-section/localized-section.component.html":
/***/ (function(module, exports) {

module.exports = "<page-section [title]=\"getTitleLocalizationMark() | translate\" [anchor]=\"label\" [isContainer]=\"isContainer\">\n  <ng-content></ng-content>\n</page-section>\n"

/***/ }),

/***/ "./src/app/sections/localized-section/localized-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizedSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalizedSectionComponent = /** @class */ (function () {
    function LocalizedSectionComponent() {
        this.isContainer = true;
    }
    LocalizedSectionComponent.prototype.ngOnInit = function () {
    };
    LocalizedSectionComponent.prototype.getTitleLocalizationMark = function () {
        return "@@section." + this.label + ".title";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LocalizedSectionComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LocalizedSectionComponent.prototype, "isContainer", void 0);
    LocalizedSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'localized-section',
            template: __webpack_require__("./src/app/sections/localized-section/localized-section.component.html"),
            styles: [__webpack_require__("./src/app/sections/localized-section/localized-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalizedSectionComponent);
    return LocalizedSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/logo-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_section_component__ = __webpack_require__("./src/app/sections/logo-section/logo-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__logo_section_component__["a" /* LogoSectionComponent */]);


/***/ }),

/***/ "./src/app/sections/logo-section/logo-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/logo-section/logo-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"style=\"text-align: center;\">\n  <img src=\"assets/img/bad_rabbit_logo2.png\" alt=\"Bad Rabbit\" style=\"width: 400px; max-width: 100%; align-self: center;\">\n</div>\n"

/***/ }),

/***/ "./src/app/sections/logo-section/logo-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoSectionComponent = /** @class */ (function () {
    function LogoSectionComponent() {
    }
    LogoSectionComponent.prototype.ngOnInit = function () {
    };
    LogoSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo-section',
            template: __webpack_require__("./src/app/sections/logo-section/logo-section.component.html"),
            styles: [__webpack_require__("./src/app/sections/logo-section/logo-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoSectionComponent);
    return LogoSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/products-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_section_component__ = __webpack_require__("./src/app/sections/products-section/products-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__products_section_component__["a" /* ProductsSectionComponent */]);


/***/ }),

/***/ "./src/app/sections/products-section/products-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/products-section/products-section.component.html":
/***/ (function(module, exports) {

module.exports = "<localized-section label=\"products\">\n  <div class=\"products__items\">\n    <ng-container *ngFor=\"let item of products; even as isEven\">\n      <localized-product-card [product]=\"item\" [position]=\"getCardPosition(isEven)\"></localized-product-card>\n    </ng-container>\n  </div>\n</localized-section>\n"

/***/ }),

/***/ "./src/app/sections/products-section/products-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsSectionComponent = /** @class */ (function () {
    function ProductsSectionComponent(_products, _translate) {
        this._products = _products;
        this._translate = _translate;
        this.data = { list: {} };
    }
    ProductsSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLocale = this._translate.currentLang;
        this._translate.onLangChange.subscribe(function (event) {
            _this.currentLocale = event.lang;
        });
        this._products.list().subscribe(function (data) {
            _this.data = data;
        });
    };
    Object.defineProperty(ProductsSectionComponent.prototype, "products", {
        get: function () {
            if (this.currentLocale && this.data && this.data.list) {
                return this.data.list[this.currentLocale] || [];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ProductsSectionComponent.prototype.getCardPosition = function (even) {
        return even ? 'right' : 'left';
    };
    ProductsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'products-section',
            template: __webpack_require__("./src/app/sections/products-section/products-section.component.html"),
            styles: [__webpack_require__("./src/app/sections/products-section/products-section.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductsSectionComponent);
    return ProductsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/two-columns-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__two_columns_section_component__ = __webpack_require__("./src/app/sections/two-columns-section/two-columns-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__two_columns_section_component__["a" /* TwoColumnsSectionComponent */]);


/***/ }),

/***/ "./src/app/sections/two-columns-section/two-columns-section.component.css":
/***/ (function(module, exports) {

module.exports = ".two-columns-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:host ::ng-deep .two-columns-section > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 50%;\n          flex: 1 0 50%;\n}\n\n@media only screen and (max-width: 992px) {\n  :host ::ng-deep .two-columns-section {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n}\n"

/***/ }),

/***/ "./src/app/sections/two-columns-section/two-columns-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container two-columns-section\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/two-columns-section/two-columns-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwoColumnsSectionComponent = /** @class */ (function () {
    function TwoColumnsSectionComponent() {
    }
    TwoColumnsSectionComponent.prototype.ngOnInit = function () {
    };
    TwoColumnsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'two-columns-section',
            template: __webpack_require__("./src/app/sections/two-columns-section/two-columns-section.component.html"),
            styles: [__webpack_require__("./src/app/sections/two-columns-section/two-columns-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoColumnsSectionComponent);
    return TwoColumnsSectionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlPipe = /** @class */ (function () {
    function HtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    HtmlPipe.prototype.transform = function (value, args) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    HtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'html',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HtmlPipe);
    return HtmlPipe;
}());



/***/ }),

/***/ "./src/languages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVAILABLE_LOCALES; });
var DEFAULT_LOCALE = 'en-US';
var AVAILABLE_LOCALES = ['en-US', 'ru-RU'];


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/page-section/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_section_component__ = __webpack_require__("./src/page-section/page-section.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__page_section_component__["a" /* PageSectionComponent */]);


/***/ }),

/***/ "./src/page-section/page-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/page-section/page-section.component.html":
/***/ (function(module, exports) {

module.exports = "<section\n  id=\"{{containerId}}\"\n  class=\"page-section {{containerClassName}}\"\n  [attr.data-link-target]=\"'#/' + anchor\"\n>\n  <div [class]=\"isContainer ? 'container' : ''\">\n    <h2 *ngIf=\"title\">{{title}}</h2>\n    <ng-content></ng-content>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/page-section/page-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageSectionComponent = /** @class */ (function () {
    function PageSectionComponent() {
        this.isContainer = true;
    }
    PageSectionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PageSectionComponent.prototype, "containerClassName", {
        get: function () {
            return this.className || this.anchor || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageSectionComponent.prototype, "containerId", {
        get: function () {
            return this.id || this.anchor || '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageSectionComponent.prototype, "className", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageSectionComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageSectionComponent.prototype, "anchor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageSectionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PageSectionComponent.prototype, "isContainer", void 0);
    PageSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-section',
            template: __webpack_require__("./src/page-section/page-section.component.html"),
            styles: [__webpack_require__("./src/page-section/page-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageSectionComponent);
    return PageSectionComponent;
}());



/***/ }),

/***/ "./src/product-card/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_card_component__ = __webpack_require__("./src/product-card/product-card.component.ts");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__product_card_component__["a" /* ProductCardComponent */]);


/***/ }),

/***/ "./src/product-card/product-card.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 1280px) {\n  .product-card.left {\n    background-position: left center;\n  }\n\n  .product-card.right {\n    background-position: right center;\n  }\n\n  .product-card {\n    margin-bottom: 4rem;\n    min-height: 450px;\n  }\n\n  .product-card .content {\n    background-color: #2a2a2a;\n    padding: 20px;\n    width: 35%;\n\t-webkit-transition: all 0.25s linear;\n\ttransition: all 0.25s linear;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .product-card.left {\n    background-position: -25% center;\n  }\n\n  .product-card.right {\n    background-position: 125% center;\n  }\n\n  .product-card {\n    margin-bottom: 2.5rem;\n    min-height: 450px;\n  }\n\n  .product-card .content {\n    opacity: 0.80;\n    background-color: #000;\n    padding: 20px;\n    width: 45%;\n  }\n}\n\n@media screen and (max-width: 860px) {\n  .product-card.left {\n    background-position: calc(-50% - 75px) center;\n  }\n\n  .product-card.right {\n    background-position: calc(150% + 75px) center;\n  }\n\n  .product-card {\n    min-height: 400px;\n  }\n\n  .product-card .content {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .product-card.left {\n    background-position: calc(-75% - 100px) center;\n  }\n\n  .product-card.right {\n    background-position: calc(175% + 100px) center;\n  }\n\n  .product-card .content {\n    padding: 10px;\n  }\n}\n\n.product-card {\n  position: relative;\n  text-align: left;\n  background-color: #d1d5d6;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.product-card h2 {\n  text-transform: uppercase;\n}\n\n.product-card .content {\n  position: absolute;\n  height: auto;\n  top: 0;\n  bottom: 0;\n}\n\n.product-card.left .content {\n  right: 0;\n  border-radius: 0 2px 2px 0;\n}\n\n.product-card.right .content {\n  left: 0;\n  border-radius: 2px 0 0 2px;\n}\n\n.product-card .content .description {\n  height: 100%;\n  opacity: 1;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"products__item\">\n  <div class=\"image_wrap\" *ngIf=\"position === 'left'\">\n    <a href=\"{{imageUrl}}\" data-fancybox=\"\"><img src=\"{{imageUrl}}\" alt=\"{{type}} - {{subType}}\"></a>\n  </div>\n  <div class=\"text_wrap\">\n    <a href=\"{{productUrl}}\" class=\"title\">{{subType || type}}</a>\n    <div class=\"price\" *ngIf=\"subType\">{{type}}</div>\n    <div class=\"description\" [innerHTML]=\"description\"></div>\n    <ng-content></ng-content>\n    <a href=\"{{productUrl}}\" class=\"show_more\" *ngIf=\"description\">More...</a>\n  </div>\n  <div class=\"image_wrap\" *ngIf=\"position === 'right'\">\n    <a href=\"{{imageUrl}}\" data-fancybox=\"\"><img src=\"{{imageUrl}}\" alt=\"{{type}} - {{subType}}\"></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProductCardComponent.prototype, "productUrl", {
        get: function () {
            return "/#/product/" + this.id + "/" + this.type + "-" + this.subType;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "subType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "description", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-card',
            template: __webpack_require__("./src/product-card/product-card.component.html"),
            styles: [__webpack_require__("./src/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
    }
    ProductsService.prototype.list = function () {
        return this._http.get('/api/products');
    };
    ProductsService.prototype.get = function (id) {
        return this._http.get("/api/product/" + id);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/text-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextPageService = /** @class */ (function () {
    function TextPageService(_http) {
        this._http = _http;
    }
    TextPageService.prototype.get = function (label) {
        return this._http.get("/api/" + label);
    };
    TextPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TextPageService);
    return TextPageService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map