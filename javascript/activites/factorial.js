let factorial = (n, result = 1) => {
    return n === 0 || n === 1 ? 1 
    : n * factorial(n-1);
};

// Above is a factorial arrow function with a first parameter being the digit symbol n 
// ie. n! = n * (n-1) * (n-2)... (1)
// 4! = 24 or 7! = 5040  
// the function above uses the javascript ternary operator typically used for cleaner code with the trading off readability.
console.log(factorial(7));

// Layout details of notes to be included and general layout of activities like possible categories of activites or some other filter 