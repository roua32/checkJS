function factorial (x) {
    let y=1 ;
    for (i=1 ; i <= x ; i++) {
    y = y*i;
    }
    
    return y;
}
    
let t = factorial(3);
console.log(t);
