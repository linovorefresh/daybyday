//Filter is a feature that you will use when you want an array of data that matches specific condition(s) from a larger array of data   
//For example imagine a list of accounts and you only want the accounts with a positive balance  

const accounts = [
    {name: 'Julie Red', balance: -9.99, status: 'paid'}, 
    {name: 'Kim Green', balance: 10.99, status: 'paid'}, 
    {name: 'Blue White', balance: 0.00, status: 'paid'},
    {name: 'Silva Zoldyck', balance: 20.99, status: 'paid'}
];

//before filter, you would create a loop and a new array
//and with filter we can cleanily get a new array with only the accounts that have a positive balance and all without altering the original array and creating a loop. 
const paidAccounts = accounts.filter( account => {
    return account.balance >= 0 ;
})

console.log(paidAccounts);