import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit {

  public reviews: Review[] = [];

  constructor() { }

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
      "</div>"
  }

  ngOnInit(): void {
    this.reviews = [
      {
        id: 1,
        names: "николай & марта",
        name: "индивидуальный дизайн",
        text: "В наше время практически каждый человек периодически делает фотоснимки – неважно, " +
          "камерой старенького телефона или профессиональной зеркальной камерой."
      },
      {
        id: 2,
        names: "николай & марта",
        name: "индивидуальный дизайн",
        text: "В наше время практически каждый человек периодически делает фотоснимки – неважно, " +
          "камерой старенького телефона или профессиональной зеркальной камерой."
      }
    ]
  }

}

interface Review {
  id: number;
  names: string;
  name: string;
  text: string;
}
