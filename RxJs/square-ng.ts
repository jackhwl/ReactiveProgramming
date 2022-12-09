import { Component } from '@angular/core';
import { Subject, Observable, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <label for="width">Width&nbsp;
        <input name="width" type="range" min="1" max="100" step="1"
          #width
          (input)="widthChanged(width.value)">
        <span class="w-val">{{w$ | async}}</span>
      </label>
    </div>
    <div>
      <label for="height">Height
        <input name="height" type="range" min="1" max="100" step="1"
          #height
          (input)="heightChanged(height.value)">
        <span class="h-val">{{h$ | async}}</span>
      </label>
    </div>
    <div style="border-top: 1px solid black;margin-top:10px;padding-top:10px;">
      <label for="area">Area&nbsp;&nbsp;&nbsp;
        <input name="area" type="number" min="1" disabled="true" [value]="area$ | async">
      </label>
    </div>
    <div class="polygon" style="border:1px solid black;position:absolute;margin:20px;" 
    [style.width.px]="w$ | async" [style.height.px]="h$ | async"></div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private widthSubj = new Subject();
  private heightSubj = new Subject();

  w$ = this.widthSubj.pipe(startWith(10));
  h$ = this.heightSubj.pipe(startWith(10));
  area$ = combineLatest([this.w$, this.h$]).pipe(map(([w,h]) => w*h))

  widthChanged(value) {
    this.widthSubj.next(value);
  }
  heightChanged(value) {
    this.heightSubj.next(value);
  }
}
