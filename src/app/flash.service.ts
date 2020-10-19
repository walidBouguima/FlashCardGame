import { Injectable } from '@angular/core'

import { IFlash } from './flash.model'

function getRandomNumber() {
  return Math.floor(Math.random() * 1000)
}
@Injectable({
  providedIn: 'root',
})
export class FlashService {
  flashs: IFlash[] = [
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
  constructor() {}

  addFlash(flash: { question: string; answer: string }) {
    this.flashs.push({
      ...flash,
      show: false,
      id: getRandomNumber(),
    })
  }
  toggleFlash(id: number) {
    const flash = this.flashs.find((flash) => flash.id === id)
    flash.show = !flash.show
  }
  deleteFalsh(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id)
    this.flashs.splice(index, 1)
  }

  remeberedChange(id: number, flag: 'correct' | 'incorrect') {
    const flash = this.flashs.find((flash) => flash.id === id)
    flash.remembered = flag
  }

  updateFlash(id, updateFlash: { question: string; answer: string }) {
    const flash = this.flashs.find((flash) => flash.id === id)
    flash.question = updateFlash.question
    flash.answer = updateFlash.answer
  }

  getFlash(id: number) {
    const flash = this.flashs.find((flash) => flash.id === id)
    return flash
  }
}
