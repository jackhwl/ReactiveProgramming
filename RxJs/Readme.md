* Promise.then return a Promise, Observable.subscribe return a subscription
* Promise is async, observable is sync
* Single Use vs Multiple Use
* Promise is eager, observable is lazy;
* * Promise is imperative, observable is declarative
* *  Promise fire right away, observable fire only after subscribe
* Observable is Cancelable
* Multicasting, hot vs cold
* chaining
* Complete vs InComplete
## Thinking reactively
* slider project
* slider prpject angular version
* slider with area
* slider area angular version
## operators
* interval, async
* range, sync
* of
* from 
* fromEvent
* pluck
* toPromise() 
## Day 2
* create function
* operators
* map, mapTo('42')
* filter
* scan vs Array.reduce
* 20 must knows operators
* [20 RXJS Operators in 20 minutes | Mike Brocchi & John Niedzwiecki](https://www.youtube.com/watch?v=ak3MvMn8u18)
* combineLastest, merge
* concat
### part 3
* Observable<Observable>
* mergeMap
* switchMap
* concatMap
* type ahead
'''
typing$.pipe(
    switchMap(text => getApiData(text))
)
'''
switchMap cancel previous one when new one comes
* Subject, BehaviorSubject, ReplaySubject
### part 4
* Testing, marble diagram
* map, combineLatest, switchMap
* testing
* cold: by natural observable is lazy only emit value after subscribe