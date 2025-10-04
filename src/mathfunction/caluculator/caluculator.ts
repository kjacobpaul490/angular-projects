import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caluculator',
  imports: [FormsModule],
  templateUrl: './caluculator.html',
  styleUrl: './caluculator.css'
})
export class Caluculator {
  // Basic calculator properties
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  // Event binding demonstration properties
  lastInput: string = '';
  enteredValue: string = '';
  templateInputValue: string = '';
  mouseStatus: string = 'Ready';
  lastKey: string = '';
  focusStatus: string = 'Not focused';

  // 1. Basic Event Binding Methods (already implemented)
  add() {
    this.result = this.num1 + this.num2;
  }
  subtract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = this.num1 / this.num2;
  }

  // 2. Event Binding with Event Object
  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lastInput = target.value;
  }

  // 3. Event Binding with Event Target
  onEnter(value: string) {
    this.enteredValue = value;
  }

  // 4. Template Reference Variables with Events
  onTemplateInput(value: string) {
    this.templateInputValue = value;
  }

  // 5. Event Binding with Multiple Parameters
  calculateWithParams(operation: string, num1: number, num2: number, event: Event) {
    console.log('Event:', event);
    console.log('Operation:', operation);
    
    switch(operation) {
      case 'add':
        this.result = num1 + num2;
        break;
      case 'subtract':
        this.result = num1 - num2;
        break;
      case 'multiply':
        this.result = num1 * num2;
        break;
      case 'divide':
        this.result = num2 !== 0 ? num1 / num2 : 0;
        break;
    }
  }

  // 6. Mouse Events
  onMouseEnter() {
    this.mouseStatus = 'Mouse Entered';
  }

  onMouseLeave() {
    this.mouseStatus = 'Mouse Left';
  }

  onMouseDown(event: MouseEvent) {
    console.log('Mouse down at:', event.clientX, event.clientY);
    this.mouseStatus = 'Mouse Down';
  }

  onMouseUp(event: MouseEvent) {
    console.log('Mouse up at:', event.clientX, event.clientY);
    this.mouseStatus = 'Mouse Up';
  }

  // 7. Keyboard Events
  onKeyDown(event: KeyboardEvent) {
    this.lastKey = `Key Down: ${event.key}`;
    console.log('Key down:', event.key, 'Code:', event.code);
  }

  onKeyUp(event: KeyboardEvent) {
    this.lastKey = `Key Up: ${event.key}`;
    console.log('Key up:', event.key, 'Code:', event.code);
  }

  // 8. Focus Events
  onFocus() {
    this.focusStatus = 'Focused';
  }

  onBlur() {
    this.focusStatus = 'Blurred (Lost Focus)';
  }
}
