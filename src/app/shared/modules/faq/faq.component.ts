import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {

  public faqs: Faq[]  = [];

  constructor() { }

  ngOnInit(): void {
    this.faqs = [
      { question: 'Можно ли вносить правки в готовые макеты?', answer: 'Нет конечно!' },
      { question: 'Какое минимальное количество приглашений я могу заказать?', answer: 'Безлимит!' },
      {
        question: 'Когда будет готов мой заказ?',
        answer: 'Если вы не знаете, как использовать вспышку должным образом, то вообще ее не включайте. ' +
          'Очень обидно, когда вы не нравитесь себе ни на одной фотографии. ' +
          'В наше время практически каждый человек периодически делает фотоснимки – неважно, камерой старенького телефона или профессиональной зеркальной камерой.'
      },
      { question: 'Делаете ли вы электронные приглашения?', answer: 'Смотря как попросить.' },
    ];
  }

  openAnswer(e: any, el: Faq){
    el.open = !el.open;
  }
}

interface Faq {
  question: string;
  answer: string;
  open?: boolean;
}
