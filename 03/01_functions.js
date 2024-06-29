//functions in JS

function greet() {
    console.log('Hello World');
}

//greet();

//function with parameter
function greetUser(name) {
    console.log('Hello ' + name);
}
greetUser('Adhi');

//function with return value
function greetUser2(name) {
    return 'Hello ' + name;
}
//console.log(greetUser2('Adhi'));

//function with multiple parameter
function add(a, b) {
    return a + b;
}
//console.log(add(2, '4')); //24
//console.log(add(2, s));  //error

//function with default parameter
function multiply(a, b = 1) {
    return a * b;
}
//console.log(multiply(2, 4)); //8

//function with rest parameter
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}
//console.log(sum(1, 2, 3, 4, 5)); //15

//function with spread operator
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); //15

//function with arrow function
const multiply2 = (a, b) => a * b;
console.log(multiply2(2, 4)); //8

//function with arrow function and return object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Adhi', 20)); //{ name: 'Adhi', age: 20 }
