const source = interval(300).pipe(
    take(5),
    tap(n=> console.log(`${n} - nexted`)),
    switchMap(n => {
        return getApiData((n + 1) * 100, 3)
    })
)

const source = interval(300).pipe(
    take(5),
    tap(n=> console.log(`${n} - nexted`)),
    concatMap(n => {
        return getApiData((n + 1) * 100, 2)
    })
)

const source = interval(300).pipe(
    take(5),
    tap(n=> console.log(`${n} - nexted`)),
    exhaustMap(n => {
        return getApiData((n + 1) * 100, 3)
    })
)

source.subscribe(console.log)

function getApiData(howOften: number, howMany: number) {
    return setInterval(howOften).pipe(
        map(n => String.fromCharCode((n % 26) + 65)),
        take(howMany)
    )
}