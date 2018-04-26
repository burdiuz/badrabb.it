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

    const menu_list = $('.mobile_menu ul').find('li');
    let n = 0;
    $(menu_list).each(function () {
      $(this).find('a').css('animation-delay', `.${n}s`);
      n++;
    });

    $('.menu a').click(function () {
      const elementClick = $(this).attr('href');
      const target = $(`[data-link-target="${elementClick}"]`);

      if (target.length) {
        const destination = target.offset().top;
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1000);

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

  onWindowResize = () => {
    if ($(window).width() < 768) {
      $('.menu').removeClass('header__menu');
      $('.menu').addClass('mobile_menu');
      $('.menu').hide();
    } else {
      $('.menu').removeClass('mobile_menu');
      $('.menu').addClass('header__menu');
      $('.menu').show();
    }
  };

}
