//const subj = new Subject();
//const subj = new BehaviorSubject(0);
const subj = new ReplaySubject(4);

subj.subscribe(x => console.log(`sub #0 - ${x}`))
subj.next(1)
subj.subscribe(x => console.log(`sub #1 - ${x}`))
subj.next(2)
subj.subscribe(x => console.log(`sub #2 - ${x}`))
