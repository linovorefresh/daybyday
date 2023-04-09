let average = (a) => {
    return a.length === 0 ? 0 : a.reduce((prev, cur) => prev + cur, 0) / a.length;
};

// Above is average formula as an arrow function with a first parameter as an array arguement passed to a function. The array is always defined and always numbers. Return 0 if the array is empty.
// ie. 
console.log(average([1, 2, 3, 4, 5, 6, 7, 8]));
