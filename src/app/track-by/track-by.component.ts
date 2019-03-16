import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit, OnDestroy {
  someComplexArray = [];
  arraySize: number;
  newArraySize: number;
  constructor() { }

  ngOnInit() {
  }

  generateArray() {
    this.someComplexArray = [];
    let i = 0;
    while (i < this.arraySize) {
      this.someComplexArray.push({ id: i++, name: `abc-${Math.random().toFixed(5)}-${i}` });
    }
  }

  addToArray() {
    const newArray = [];
    let i = 1;
    while (i <= this.newArraySize) {
      newArray.push({ id: i++ * 500, name: `abc-${Math.random().toFixed(5)}-${i}` });
    }
    this.someComplexArray = [...newArray, ...this.someComplexArray, ...newArray];
    // this.someComplexArray.push(...newArray);
    // this.someComplexArray.unshift(...newArray);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  deleteItem(index) {
    this.someComplexArray.splice(index, 1);
  }

  clearArray() {
    this.someComplexArray = [];
  }

  ngOnDestroy(): void {
    this.someComplexArray = [];
  }
}
