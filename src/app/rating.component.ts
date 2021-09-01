import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()
  
  @Input() rate: number = 0/*Input() aqui -->
                            para quando estivermos utilizando este elemento fora de uma aplicacao angular
                            possamos passar um valor pra ele iniciar*/

  rates: number[] = [1, 2, 3, 4, 5]

  previousRate: any

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }

}
