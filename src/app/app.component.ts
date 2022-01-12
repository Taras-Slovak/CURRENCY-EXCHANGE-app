import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  hide: boolean = true;
  func() {
    if (this.hide === false) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
