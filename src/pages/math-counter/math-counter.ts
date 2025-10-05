import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-math-counter',
  imports: [FormsModule, CommonModule],
  templateUrl: './math-counter.html',
  styleUrl: './math-counter.css'
})
export class MathCounter {
  constructor(public counterService: Counter) {}

  // Expose service properties and methods to template
  get counter() {
    return this.counterService.counter;
  }

  get inputValue() {
    return this.counterService.inputValue;
  }

  set inputValue(value: number) {
    this.counterService.inputValue = value;
  }

  get step() {
    return this.counterService.step;
  }

  set step(value: number) {
    this.counterService.step = value;
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }

  setValue() {
    this.counterService.setValue();
  }

  setStep(step: number) {
    this.counterService.setStep(step);
  }
}
