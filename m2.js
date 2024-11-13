function isPrime (n) {
    if (n===1) { return false}
    let r=0 ;
    for (let i=1 ; i <=n ; i++) {
    if (n % i !== 0 ) {
    continue;
    }
    r = r + i ;
    }
    
    return r===n+1;
}
    
let a = isPrime(11);
console.log(a);

