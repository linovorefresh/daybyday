let fibonacci = (n) => {
    let array = [0,1];
    if(n<=2) return n-1;
    for(let i = 2; i < n; i++){
        array.push(array[array.length - 2] + array[array.length - 1]);
    }
    return array[n-1];
};

// Above is a fibonacci arrow function with the parameter being the nth entry in the sequence. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ..
// eg. fibonacci(8) returns 13 and fibonacci(10) returns 34
console.log(fibonacci(4));