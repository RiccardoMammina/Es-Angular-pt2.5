import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

 private counterSubject = new BehaviorSubject<number>(0);
  constructor() { }

  showValue() {
    if (this.counterSubject.getValue() >= 0) {
      return this.counterSubject.getValue();
    } else
      return 'counter cannot be negative'
    }

  increseCounter(value: number) {
    this.counterSubject.subscribe();
    this.counterSubject.next(value ? (this.counterSubject.getValue() + +value) : (this.counterSubject.getValue() + 1));
  }

  decreseCounter(value: number) {
    this.counterSubject.subscribe();
    this.counterSubject.next(value ? (this.counterSubject.getValue() - value) : (this.counterSubject.getValue() - 1));
  }
}
