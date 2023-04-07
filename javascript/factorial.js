let factorial = (n, result = 1) => {
    return n === 0 || n === 1
    ? 1 
    : n * factorial(n-1);
};

// Above is factorial formula as an arrow function with a first parameter being the digit symbol n 
// ie. n! = n * (n-1) * (n-2)... (1)
// 4! = 24 or 7! = 5040  
console.log(factorial(7));