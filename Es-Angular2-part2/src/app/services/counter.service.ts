import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;

  constructor() { }

  getValue(): number {
    return this.counter;
  }

  increseCounter(value: number = 1): number {
    return this.counter + value;
  }

  decreseCounter(value: number = 1): number {
    return this.counter - value;
  }

  errorCounter() {
    if (this.counter < 0) {
      console.error('Counter non può essere negativo')
    }
  }
}
