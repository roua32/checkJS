function Sum(tab) {
    let s = 0;

    for (let i = 0 ; i < tab.length ; i++) {
        
        s = s + tab[i];
    } 



    return s
}
let x = Sum([1, 2, 3]); 
console.log(x);
