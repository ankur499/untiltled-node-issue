import { Component } from '@angular/core';
import { LZ4 } from 'lz4';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent {
  data: any;

  constructor() {
    console.log(LZ4);
    this.data = {name: 'Ankur'};
  }
}
