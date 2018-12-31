
// Range Sequence
export function* rangeSeq(start, end, step = 1) {
    let results = []
    do {
        results.push(start)
        start += step
    } while (start <= end)
    yield results
}

// Factorial Sequence
export function* factorialSeq(num) {
    let fact = 1;

    for (let i = num; i >= 1; i = i - 1) {
        fact = fact * i
    }
    yield fact
}

//Prime Numbers Sequence
export function* primes(num = 100) {
    var primes = []
    for (let i = 2; i < num; i++) {
        primes[i] = true;
    }

    var limit = Math.sqrt(num)
    for (let i = 2; i < limit; i++) {
        if (primes[i] === true) {
            for (let j = i * i; j < num; j += i) {
                primes[j] = false
            }
        }
    }

    for (let i = 2; i < num; i++) {
        if (primes[i] === true) {
            yield i
        }
    }
}


// Fibonacci Sequence
export function fib(num) {
    if (num < 1)
        return 0;

    if (num <= 2)
        return 1;

    return fib(num - 1) + fib(num - 2);
}
