import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {

  feedbackForm = new FormGroup({
    name: new FormControl(''),
    secondName: new FormControl(''),
    type: new FormControl('instagram'),
    question: new FormControl('')
  });

  sender = false;
  secondNamePlaceHolder = 'Ник';
  secondNameType = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeType(){
    let secondNamePlaceholder;
    let secondNameFieldType = '';
    switch (this.feedbackForm.value.type){
      case 'telegram':
        secondNamePlaceholder = 'Ссылка';
        break;
      case 'email':
        secondNamePlaceholder = 'Email';
        break;
      case 'whatsapp':
        secondNamePlaceholder = 'Телефон';
        secondNameFieldType = 'phone';
        break;
      default:
        secondNamePlaceholder = 'Ник';
    }

    this.secondNameType = secondNameFieldType;
    this.secondNamePlaceHolder = secondNamePlaceholder;
  }

  onSubmit(){
    console.log(this.feedbackForm.value);
    this.sender = true;
    return false;
  }

}
