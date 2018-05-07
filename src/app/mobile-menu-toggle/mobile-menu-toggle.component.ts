import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: (...args: any[]) => any;

@Component({
  selector: 'mobile-menu-toggle',
  templateUrl: './mobile-menu-toggle.component.html',
  styleUrls: ['./mobile-menu-toggle.component.css']
})
export class MobileMenuToggleComponent implements OnInit, AfterViewInit {

  menuTopHeight = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(window).resize(this.onWindowResize);
    this.onWindowResize();

    $('.toggle_mnu').click(this.onToggleMenuClick);
    this.listenMobileMenu();
  }

  listenMobileMenu() {
    $('.mobile_menu ul a').on('click', this.onMobileMenuItemClick);
  }

  onToggleMenuClick = () => {
    $('.sandwich').toggleClass('active');
    $('header.sticky').toggleClass('mobile_menu_active');
    this.menuTopHeight = $(window).scrollTop();

    if ($('.mobile_menu').is(':visible')) {
      $('.mobile_menu').fadeOut(600);
      $('.mobile_menu li a').removeClass('fadeInUp animated');
    } else {
      $('.mobile_menu').fadeIn(600);
      $('.mobile_menu li a').addClass('fadeInUp animated');
    }
  };

  onMobileMenuItemClick = () => {
    $('.mobile_menu').fadeOut(600);
    $('.sandwich').toggleClass('active');
  };

  onWindowResize = () => {
    if ($(window).width() < 768) {
      $('.sandwich').removeClass('active');
    } else {
      $('.sandwich').addClass('active');
    }
  };
}
