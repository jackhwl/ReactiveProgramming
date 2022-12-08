import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { logBlue, logRed } from './logs';

console.clear();

// Multi-casting
const o = (window.o = new Observable((observer) => {
  // Imaging this code calls the server before calling .next
  logRed('making call to server');
  observer.next('THIS IS AN OBSERVABLE');
}))

const sharedObs = o.pipe(shareReplay({refCount: true, bufferSize: 1}));

// Subscribing twice calls the server twice. Probably not cool.
window.s1 = o.subscribe(logRed);
window.s2 = o.subscribe(logRed);

window.s3 = sharedObs.subscribe(logRed);
window.s4 = sharedObs.subscribe(logRed);

// Try manually subscribing again in the console
// o.subscribe(console.log)
