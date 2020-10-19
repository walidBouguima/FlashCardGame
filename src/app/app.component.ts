import { Component } from '@angular/core'

import { IFlash } from './flash.model'

function getRandomNumber() {
  return Math.floor(Math.random() * 1000)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flashes: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 4',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
      show: false,
      id: getRandomNumber(),
    },
  ]

  // tslint:disable-next-line: typedef
  trackFlashById(flash) {
    return flash.id
  }
  // tslint:disable-next-line: typedef
  handleToggleCard(id: number) {
    // tslint:disable-next-line: no-shadowed-variable
    const flash = this.flashes.find((flash) => flash.id === id)
    flash.show = !flash.show
  }
}
