let fibonacci = (n) => {
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
};

// Above is a fibonacci arrow function with the parameter being the nth entry in the sequence. 
// ie. fibonacci(8) returns 21 and fibonacci(10) returns 55
console.log(fibonacci(10));
