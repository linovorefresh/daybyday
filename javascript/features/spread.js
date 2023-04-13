//Spread syntax is denoted with ellipsis (...) and is a javascript feature that allows us to quickly copy all parts of an existing array or object (i.e iterables) to its individual elements.
//For example imagine having a sum function that takes in 4 parameters
sum = (first, second, third, fourth) => first + second + third + fourth;


//before spread, each parameter would need go passed in explicitly 
//eg. const cost = [3, 5, 7, 8]; const total = sum(cost[0], cost[1], cost[2], cost[3]);
//and with spread we can now simply pass each parameter in simply as 

const cost = [3, 5, 7, 8]; 
const total = sum(...cost); // equivalent to sum(3, 5, 7, 8)