import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  public result: number = 0;
  public currentNumber: string = '0';
  public operator: string = '';

  constructor() {}

  appendNumber(num: string) {
    if (this.currentNumber === '0') {
      this.currentNumber = num;
    } else {
      this.currentNumber += num;
    }
  }

  setOperator(operator: string) {
    if (this.operator !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.result = parseFloat(this.currentNumber);
    this.currentNumber = '0';
  }

  calculate() {
    const current = parseFloat(this.currentNumber);
    switch (this.operator) {
      case '+':
        this.result += current;
        break;
      case '-':
        this.result -= current;
        break;
      case '*':
        this.result *= current;
        break;
      case '/':
        this.result /= current;
        break;
    }
    this.currentNumber = this.result.toString();
    this.operator = '';
  }

  clear() {
    this.result = 0;
    this.currentNumber = '0';
    this.operator = '';
  }
}

