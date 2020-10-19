import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { IFlash } from '../flash.model'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
})
export class FlashComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDelete = new EventEmitter()
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEdit = new EventEmitter()
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRememberedChange = new EventEmitter()
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToggleCard = new EventEmitter()
  @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  }
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  toggleCard() {
    this.onToggleCard.emit(this.flash.id)
  }

  // tslint:disable-next-line: typedef
  deleteFlash() {
    this.onDelete.emit(this.flash.id)
  }
  // tslint:disable-next-line: typedef
  editFlash() {
    this.onEdit.emit(this.flash.id)
  }
  // tslint:disable-next-line: typedef
  markCorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    })
  }
  // tslint:disable-next-line: typedef
  markIncorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    })
  }
}
