import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

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

  flashs$ = new BehaviorSubject<IFlash[]>(this.flashs)

  constructor() {}

  addFlash(flash: { question: string; answer: string }) {
    this.flashs = [
      ...this.flashs,
      {
        ...flash,
        show: false,
        id: getRandomNumber(),
      },
    ]
    this.flashs$.next(this.flashs)
  }
  toggleFlash(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id)
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        show: !this.flashs[index].show,
      },
      ...this.flashs.slice(index + 1),
    ]
    this.flashs$.next(this.flashs)
  }
  deleteFalsh(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id)
    this.flashs = [...this.flashs.slice(0, index), ...this.flashs.slice(index + 1)]
    this.flashs$.next(this.flashs)
  }

  remeberedChange(id: number, flag: 'correct' | 'incorrect') {
    const index = this.flashs.findIndex((flash) => flash.id === id)
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        remembered: flag,
      },
      ...this.flashs.slice(index + 1),
    ]
    this.flashs$.next(this.flashs)
  }

  updateFlash(id, updateFlash: { question: string; answer: string }) {
    const index = this.flashs.findIndex((flash) => flash.id === id)
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        ...updateFlash,
      },
      ...this.flashs.slice(index + 1),
    ]
    this.flashs$.next(this.flashs)
  }

  getFlash(id: number) {
    const flash = this.flashs.find((flash) => flash.id === id)
    return flash
  }
}
