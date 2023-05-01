//Reduce is a feature similar to the map function, but with more functionaily so that it allows a function to operate on each element of an array and then passing
// in the return value from the calculation on the preceding element. 
//For example imagine a list of employees and you want an object that contains employee titles and how many have that title

const employeeList = [
    {name: 'Red Miller', department: 'retail', title: 'manager'}, 
    {name: 'Green King', department: 'retail', title: 'associate'}, 
    {name: 'Blue James', department: 'retail', title: 'associate'}, 
    {name: 'Ill Zoldyck', department: 'finance', title: 'assistant'}, 
    {name: 'Veg Brief', department: 'finance', title: 'manager'} 
];

//before reduce, you would create a loop and a new array
//and with reduce we can cleanily get a new array with only the accounts that have a positive balance and all without altering the original array and creating a loop. 
const staffDetails = employeeList.reduce((acc, cv)=> {
    const cvCount = acc[cv.title];
    if(cvCount) {
        acc[cv.title] = cvCount + 1;
    } else {
        acc[cv.title] = 1;
    }
    return acc;
},{});

console.log(staffDetails);