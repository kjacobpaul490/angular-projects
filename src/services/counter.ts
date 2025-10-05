import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Counter {
  counter: number = 0;
  inputValue: number = 0;
  step: number = 1;

  increment() {
    this.counter += this.step;
  }

  decrement() {
    this.counter -= this.step;
  }

  reset() {
    this.counter = 0;
  }

  setValue() {
    if (!isNaN(this.inputValue)) {
      this.counter = this.inputValue;
    }
  }

  setStep(step: number) {
    this.step = step;
  }
}
