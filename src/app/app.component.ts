import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs'

import { IFlash } from './flash.model'
import { FlashService } from './flash.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('flashForm', { static: true }) flashForm: NgForm
  editing = false
  editingId: number
  flash = {
    question: '',
    answer: '',
  }
  flashes
  flash$: Observable<IFlash[]>

  // tslint:disable-next-line: typedef
  trackFlashById(flash) {
    return flash.id
  }

  // tslint:disable-next-line: typedef
  handleToggleCard(id: number) {
    this.FS.toggleFlash(id)
  }

  // tslint:disable-next-line: typedef
  handleDelete(id: number) {
    this.FS.deleteFalsh(id)
  }
  // tslint:disable-next-line: typedef
  handleEdit(id: number) {
    this.flash = this.FS.getFlash(id)
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
    this.FS.addFlash(this.flash)
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

  handleCancel() {
    this.editing = false
    this.editingId = undefined
    this.handleClear()
  }
  handleUpdate() {
    this.FS.updateFlash(this.editingId, this.flash)
    this.handleCancel()
  }

  constructor(private FS: FlashService) {
    this.flashes = this.FS.flashs
  }
  ngOnInit() {
    this.flash$ = this.FS.flashs$
  }
}
