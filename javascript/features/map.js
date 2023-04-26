//Map is a javascript feature that lets you easily take an array and apply some procedure to its elements and gives you a new array with the modified elements
//For example imagine a list of accounts and you wanted to change the status of each account according to the account balance is positive or negative

const accounts = [
    {name: 'Julie Red', balance: -9.99, status: 'paid'}, 
    {name: 'Kim Green', balance: 10.99, status: 'paid'}, 
    {name: 'Blue White', balance: 0.00, status: 'paid'},
    {name: 'Silva Zoldyck', balance: 20.99, status: 'paid'}
];

//before map, you would need to create an index and a loop and a new array
//and with map we can operate with each element in accounts, push the new element to a new array.
const updatedAccounts = accounts.map( account => {
    let newStatus = account.balance >= 0 ? 'paid' : 'delinquent';
    return {
        name: account.name,
        balance: account.balance,
        status: newStatus
    }
})
