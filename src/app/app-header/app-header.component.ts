import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: (...args: any[]) => any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(window).resize(this.onWindowResize);
    this.onWindowResize();

    $('.menu a').click(function () {
      const elementClick = $(this).attr('href');
      const target = $(`[data-link-target="${elementClick}"]`);

      const scrollTo = (scrollTop: Number, timeout: Number) => {
        const elem = $('html:not(:animated),body:not(:animated)');
        elem.stop();
        elem.animate(
          { scrollTop },
          {
            duration: timeout,
            step: () => {
              const destination = target.offset().top;
              console.log('STEP!!!!');
              if (destination - 10 > scrollTop) {

              }
            },
          },
        );
      };

      if (target.length) {
        const maxTimeout = 1000;
        const destination = target.offset().top;

        setTimeout(() => {
          const currentDestination = target.offset().top;

          if (currentDestination > destination) {
            scrollTo(currentDestination, maxTimeout * 0.5);
          }

        }, maxTimeout / 2);

        scrollTo(destination, maxTimeout);

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
  }

  initMobileMenuItems() {
    let n = 0;
    const menu_list = $('.mobile_menu ul').find('li');
    $(menu_list).each(function () {
      $(this).find('a').css('animation-delay', `.${n}s`);
      n++;
    });
  }

  onMenuItemClick() {
    const mobileMenu = $('.mobile_menu');
    if (mobileMenu.length) {
      $('.mobile_menu').fadeOut(600);
      $('.sandwich').toggleClass('active');
    }
  }

  onWindowResize = () => {
    if ($(window).width() < 768) {
      $('.menu').removeClass('header__menu');
      $('.menu').addClass('mobile_menu');
      $('.menu').hide();
      this.initMobileMenuItems();
    } else {
      $('.menu').removeClass('mobile_menu');
      $('.menu').addClass('header__menu');
      $('.menu').show();
    }
  };

}
