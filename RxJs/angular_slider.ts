import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `
    <div>
    <label for="range">
      Number
      <input name="range" type="range" #range min="1" max="100" step="1" value="10" (input)="rangeChanged(range.value)">
      <span class="range-value">{{rangeObs | async}}</span>
    </label>
  </div>
  <div>
    Doubled Value:
    <span class="doubled-value">{{doubleValueObs | async}}</span>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  rangeObserver;
  rangeObs;
  doubleValueObs;

  ngOnInit() {
    this.rangeObs = new Observable((observer) => {
      this.rangeObserver = observer;
    }).pipe(
      startWith(10),
      shareReplay(1)
    );
    this.doubleValueObs = this.rangeObs.pipe(map(v=>v*2));

    this.rangeObs.subscribe(console.log);
  }
  
  rangeChanged(value) {
    this.rangeObserver.next(value)
  }
}
