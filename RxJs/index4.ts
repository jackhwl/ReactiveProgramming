import { Observable, Subscription } from 'rxjs';
import { logBlue, logRed } from './logs';

console.clear();

// Cancelable
const o = new Observable((observer) => {
  // Use your imagination. Imagine this is an HTTP
  // call instead of a setTimeout
  setTimeout(() => {
    console.log('I am nexting this thing');
    observer.next('THIS IS AN OBSERVABLE');
  }, 1001);
});

const sub: Subscription = o.subscribe((response) => {
  logRed(response);
});

setTimeout(() => {
  sub.unsubscribe();
}, 1000);
