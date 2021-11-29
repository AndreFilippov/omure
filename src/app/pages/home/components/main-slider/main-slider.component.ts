import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.less']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: "./assets/img/sliders/slider_1.jpg" },
    { img: "./assets/img/sliders/slider_1.jpg" },
    { img: "./assets/img/sliders/slider_1.jpg" }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<div class='btn-prev main-arrow'>" +
      '<svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '  <path d="M10.375 1L1 11L10.375 21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      "</div>",
    nextArrow: "<div class='btn-next main-arrow'>" +
      '<svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M1 21L10.375 11L1 0.999999" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      "</div>",
    dots: true,
    dotsClass: 'main-dots',
    customPaging : () => {
      return '<div class="dot">' +
        '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="5" cy="5" r="4.5" stroke="black"/>' +
        '</svg>' +
        '</div>';
    },
  };
}
