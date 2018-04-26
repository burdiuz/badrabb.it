import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: (...args: any[]) => any;

@Component({
  selector: 'mobile-menu-toggle',
  templateUrl: './mobile-menu-toggle.component.html',
  styleUrls: ['./mobile-menu-toggle.component.css']
})
export class MobileMenuToggleComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(window).resize(this.onWindowResize);
    this.onWindowResize();

    let menu_top_height = 0;
    $('.toggle_mnu').click(function() {
      $('.sandwich').toggleClass('active');
      $('header.sticky').toggleClass('mobile_menu_active');
      menu_top_height = $(window).scrollTop();
    });

    $('.mobile_menu ul a').click(function() {
      $('.mobile_menu').fadeOut(600);
      $('.sandwich').toggleClass('active');
    });

    $('.toggle_mnu').click(function() {
      if ($('.mobile_menu').is(':visible')) {
        $('.mobile_menu').fadeOut(600);
        $('.mobile_menu li a').removeClass('fadeInUp animated');
      } else {
        $('.mobile_menu').fadeIn(600);
        $('.mobile_menu li a').addClass('fadeInUp animated');

      };
    });
  }

  onWindowResize = () => {
    if ( $(window).width() < 768 ) {
      $('.sandwich').removeClass('active');
    } else {
      $('.sandwich').removeClass('active');
    }
  }

}
