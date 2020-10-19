import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

import { IFlash } from './flash.model'

// tslint:disable-next-line: typedef
function getRandomNumber() {
  return Math.floor(Math.random() * 1000)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('flashForm', { static: true }) flashForm: NgForm
  editing = false
  editingId: number
  flash = {
    question: '',
    answer: '',
  }
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
    const flash = this.flashes.find((flash) => Object.is(flash.id, id))
    flash.show = !flash.show
  }

  // tslint:disable-next-line: typedef
  handleDelete(id: number) {
    const index = this.flashes.findIndex((flash) => Object.is(flash.id, id))
    this.flashes.splice(index, 1)
  }
  // tslint:disable-next-line: typedef
  handleEdit(id: number) {
    this.editing = true
    this.editingId = id
  }
  // tslint:disable-next-line: typedef
  handleRememberedChange({ id, flag }) {
    // tslint:disable-next-line: no-shadowed-variable
    const flash = this.flashes.find((flash) => Object.is(flash.id, id))
    flash.remembered = flag
  }
  handleSubmit(): void {
    this.flashes.push({
      id: getRandomNumber(),
      show: false,
      ...this.flash,
    })
    this.handleClear()
  }
  // tslint:disable-next-line: typedef
  handleClear() {
    this.flash = {
      question: '',
      answer: '',
    }
    this.flashForm.reset()
  }
}
