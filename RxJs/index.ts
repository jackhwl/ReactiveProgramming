import  { Observable } from 'rxjs'

console.clear()

const p = new Promise((resolve, reject) => {
    resolve("This is a Promise")
})

const o = new Observable((observer) => {
    observer.next("This is an Observable")
    observer.error("This is an error")
    observer.complete();
})

const p2 = p.then((res) => {
    // Success
}, (err) => {
    // Error
})

const subscription = o.subscribe((res) => {
    // Success
}, (err) => {
    // Error
}, () => {
    // Complete
})
