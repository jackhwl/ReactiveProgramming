import { Observable } from 'rxjs'; 
import { logBlue, logRed } from './logs';
import { shareReplay, share, map, filter, startWith, take, tap } from 'rxjs/operators';

console.clear();

const getRandomNumber = () => Math.round(Math.random() * 100);

// Chaining
const o = window.a = new Observable((observer) => {
  setInterval(() => observer.next(getRandomNumber()), 100)
})
.pipe(
  startWith(getRandomNumber()),
  filter(val => val < 50),
  map(val => val * val),
  filter(val => val > 500),
  map(val => Math.sqrt(val)),
  take(4),
);

o.subscribe(logRed, () => {}, () => console.log("DONE")); 

