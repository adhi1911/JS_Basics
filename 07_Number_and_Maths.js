//console.log("07_Number_and_Maths.js");

const score = 100;
console.log(typeof score); //number

const balance = new Number(100);
console.log(typeof balance); //object
console.log(balance); //[Number: 100]

console.log(balance.toString());
console.log(balance.toFixed(2));

const num = 52.35767;
console.log(num.toPrecision(4)); //52.36
console.log(num.toPrecision(1)); //5e+1

//toLocaleString()
let hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN ')); 

//----------Math Object-------------//
console.log(Math); //{}
// console.log(Math.PI); //3.141592653589793
// console.log(Math.E); //2.718281828459045
// console.log(Math.SQRT2); //1.4142135623730951
// console.log(Math.SQRT1_2); //0.7071067811865476
// console.log(Math.LN2); //0.6931471805599453
// console.log(Math.LN10); //2.302585092994046
// console.log(Math.LOG2E); //1.4426950408889634
// console.log(Math.LOG10E); //0.4342944819032518


//-----------------Math Methods-----------------//
// console.log(Math.round(2.4)); //2
// console.log(Math.round(2.5)); //3
//console.log(Math.ceil(2.4)); //3
//console.log(Math.abs(-2.4)); //2.4
//console.log(Math.floor(2.9)); //2
//.max() and .min() methods
// console.log(Math.max(2,4,6,8,10)); //10
// console.log(Math.min(2,4,6,8,10)); //2


// random methods
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 +1);
console.log(Math.round(Math.random()*10 +1));

//range of random number
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1) + min));






// 1. Write a JavaScript program to display the current day and time.

// console.log("1. Write a JavaScript program to display the current day and time.");
// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// console.log("Today is : " + daylist[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12)? " PM ":" AM ";
// console.log("Current Time : "+hour + " : " + minute + " : " + second + prepand );
