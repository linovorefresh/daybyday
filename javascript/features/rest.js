//Rest operator syntax is denoted with ellipsis (...) and is a javascript feature that allows us to quickly gather an indefinite number of items of an obj/array and put them into a single variable
//For example imagine implementing a function takes in a variable amount of parameters and checks if its an even number.

verifyEvenNumber = (...args) => {
    let isEven = [];
    let isOdd = [];

    for(let i of args){
        i % 2 == 0 ? isEven.push(i) : isOdd.push(i);
    }
    return isEven;
}


//before rest, this function would use the arguments object, an array-like object available as a local variable in each function
//and with rest we can now simply pass as many parameters needed and it will simply handle each parameter as the args varaible 

const arrayOfEvenNumbers = verifyEvenNumber(1, 3, 5, 9, 10, 12, 14, 16); 