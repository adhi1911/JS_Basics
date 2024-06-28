const userId = 1;
let userName = 'adhi';
var userPass = '1234';
city = 'Nashik';


// userId = 2; // Error: Assignment to constant variable.

userName = 'Adhithya'; // No Error
userPass = '5678'; // No Error
city = 'Pune'; // No Error

console.log(userId, userName, userPass, city);

// to declare a variable let and var can be used
//var has global scope
//let has block level scope
//const has block level scope
//const is used for constant values
//const cannot be reassigned
//undefined is a type in javascript