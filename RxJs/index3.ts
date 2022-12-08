import { Observable } from 'rxjs';
import { logBlue, logRed } from './logs';

console.clear();

// Eager vs Lazy
const p = new Promise((resolve, reject) => {
  logBlue('Creating a Promise');
  resolve('THIS IS A PROMISE');
});

const o = (window.o = new Observable((observer) => {
  logRed('Creating an Observable');
  observer.next('THIS IS AN OBSERVABLE');
}));

p.then((response) => {
  logBlue(response);
});
o.subscribe((response) => {
  logRed(response);
});
