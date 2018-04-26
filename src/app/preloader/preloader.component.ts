import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: (...args: any[]) => any;

@Component({
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.loader_inner').fadeOut();
    $('.loader').delay(10).fadeOut('slow');
  }

}
