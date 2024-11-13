function minMax(arr) {
	let min = arr[0] ;
	let max =arr[0] ;
for (let i=0 ;  i <= arr.length ; i++){
	if (min >  arr[i] ) {
		min = arr[i];
	}
		if (arr[i] > max) {
		max = arr[i];
	}
	}


return [min ,max]
}
let x = minMax([1, 10, 7000, 50, 0]);
console.log(x);
