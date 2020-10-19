import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { IFlash } from '../flash.model'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
})
export class FlashComponent implements OnInit {
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
}
