import { Observable } from 'rxjs';

console.clear();

// Single Use vs Multiple Use
const p = new Promise((resolve, reject) => {
  resolve('THIS IS A PROMISE');
  resolve('THIS IS ALSO A PROMISE');
});

let count = 0;
const o = new Observable((observer) => {
  setInterval(() => {
    count++;
    if (count == 2) observer.error('err101');
    if (count > 4) observer.complete();
    observer.next('THIS IS AN OBSERVABLE');
  }, 1000);
});

o.subscribe(
  (rec) => console.log('success', rec),
  (err) => console.log('error', err),
  () => console.log('completed')
);
