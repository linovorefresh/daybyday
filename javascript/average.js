let average = (a) => {
    return a.length === 0 ? 0 : a.reduce((prev, cur) => prev + cur, 0) / a.length;
};

// Above is an arrow function to get the average of all the values in an array. The function has one parameter as an array. The array argument passed in should always be defined and always numbers. Return 0 if the array is empty.
// ie. the average of 1,2,3,4,5,6,7,8 is 4.5
console.log(average([1, 2, 3, 4, 5, 6, 7, 8]));
