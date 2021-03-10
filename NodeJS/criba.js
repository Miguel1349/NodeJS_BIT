function sieve(n) {
    let numbers = new Uint8Array(n + 1);
    let maxValue = Math.floor(Math.sqrt(n));
    let p = 2;
    while(p <= maxValue) {
        for(let index = 2 * p; index <= n; index += p) {
            numbers[index] = 1;            
        }
        while(numbers[++p]) { }
    }
    while(numbers[n]) {
        n--;
    }
    return n;
}

console.log(sieve(120));