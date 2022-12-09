import { fromEvent, combineLatest } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

console.clear();

// source elements
const w: HTMLInputElement = document.querySelector('input[name=width]');
const h: HTMLInputElement = document.querySelector('input[name=height]');
w.value = h.value = '10';

// target elements
const area: HTMLInputElement = document.querySelector('input[name=area]');
const wval: HTMLInputElement = document.querySelector('.w-val');
const hval: HTMLInputElement = document.querySelector('.h-val');
const polygon: HTMLInputElement = document.querySelector('.polygon');

const w$ = fromEvent(w, 'input').pipe(map(e => e.target.value), startWith(w.value))
const h$ = fromEvent(h, 'input').pipe(map(e => e.target.value), startWith(h.value))
const wh$ = combineLatest([w$, h$])
const area$ = wh$.pipe(map(([w,h]) => w*h ))

w$.subscribe(val => wval.innerText = val)
h$.subscribe(val => hval.innerText = val)
area$.subscribe(val => area.value = val)

wh$.subscribe(([w, h]) => {
  polygon.style.width = `${w}px`;
  polygon.style.height = `${h}px`;
})