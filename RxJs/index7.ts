import { fromEvent, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

console.clear();

const rangeEl: HTMLInputElement = document.querySelector('input[name=range]');
const rangeValueEl: HTMLInputElement = document.querySelector('.range-value');
const doubledValueEl: HTMLInputElement =
  document.querySelector('.doubled-value');

const range$ = fromEvent(rangeEl, 'input').pipe(
  map((e) => e.target.value),
  startWith(rangeEl.value)
);

const double$ = range$.pipe(map(val => val*2))

range$.subscribe(val => rangeValueEl.innerText = val);
double$.subscribe(val => doubledValueEl.innerText = val);
