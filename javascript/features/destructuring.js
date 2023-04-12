//Destructuring is a javascript feature that allows extraction of multiple pieces of data from an array or object and then assign them to their own value.
//For example imagine an bank account object
const account = {
    accountNumber: 01001230,
    balance: 999.99,
    type: "savings",
    holderId: 01001,
    interestRate: .1
};

//before destructuring, each property would be accessed indivuidually
//eg. account.balance and account.type and account.interestRate
//and with destructuring we can now streamline this

const { balance, type, interestRate } = account; // equivalent to const balance = account.balance and const type = account.type and const interestRate = account.interestRate