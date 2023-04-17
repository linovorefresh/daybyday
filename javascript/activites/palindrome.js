let palindrome = (s) => {
    s = s.toLowerCase();
    return s === s.split('').reverse().join('');
};

// Above is a palindrome arrow function with the parameter being a string argument. The argument passed in should always be defined and always a string. Returns true if the string is read the same backwards as it does forward.
// eg. palindrome('racecar') returns true and palindrome('Art') returns false
console.log(palindrome("art"), palindrome('racecar'));
