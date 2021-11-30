import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;

  constructor() { }

  getValue() {
    if (this.counter >= 0) {
      return this.counter;
    } else
      return 'can not be negative'
    }

  increseCounter(value: number = 1) {
   this.counter = this.counter + +value;
   console.log(this.counter);
  }

  decreseCounter(value: number = 1) {
   this.counter = this.counter - value;
   console.log(this.counter);
  }
}
