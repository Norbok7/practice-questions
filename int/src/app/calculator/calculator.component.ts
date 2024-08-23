import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentInput: string = '';

  numberValues = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  };

  appendValue(value: string): void {
    this.currentInput += value;
  }

  clearInput(): void {
    this.currentInput = '';
  }
  deleteLast(): void {
    if (this.currentInput.length > 0) {
      this.currentInput = this.currentInput.slice(0, -1);
    }
  }

  clearAll(): void {
    this.currentInput = '';
  }

  calculateResult(): void {
    try {
      // Using Function constructor instead of eval for safer execution
      this.currentInput = new Function(`return ${this.currentInput}`)();
    } catch {
      this.currentInput = 'Error';
    }
  }
}
