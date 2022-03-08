import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  qAndAs: {question: string,answer: string,hidden: boolean}[] = [
    {
      question: 'How do I add a new Question ?',
      answer: 'To add a new question go to app settings and press "Manage Questions" button.',
      hidden: true
    },
    {
      question: 'Can I insert pictures in my FAQ ?',
      answer: 'Yes! To add a picture follow these simple steps\:\
      Enter App Settings then Click the "Manage Questions\"\ button then Click on the question you would like to attach a picture to. When editing your answer, click on the picture icon and then add an image from your library',
      hidden: true
    },
    {
      question: 'Can I insert video in my FAQ?',
      answer: 'Nope sorry',
      hidden: true
    },
    {
      question: 'How do I edit or remove FAQ title?',
      answer: 'The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.',
      hidden: true
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index: number){
    this.qAndAs[index].hidden=!this.qAndAs[index].hidden;
  }

}
