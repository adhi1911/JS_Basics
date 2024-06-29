//-----------Dates----------------//

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toDateString());

let pastDate = new Date(2022,1,17,17,33,23); // year , month index , date, hours, minutes, seconds, milliseconds
console.log(pastDate.toLocaleString());

//----Timestamps----//
let timestamp = Date.now();
console.log(timestamp); //this value is in milliseconds
// to convert this into seconds
console.log(Math.floor(timestamp/1000));



//----Date Methods----//
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
