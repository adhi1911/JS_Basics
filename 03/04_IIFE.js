// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created
// IIFE is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately executing function expression ()
// The purpose of the IIFE is to preserve a private scope within your function
// This is a common pattern for creating modules in JavaScript
// IIFE is a very useful tool for avoiding polluting the global scope


(function dbconnect(){
    console.log('Connected to the database')
})();

//arrow not work in IIFE
/* (() => {
       console.log('Connected to the database')
       })()
*/

((name) => {
    console.log('Connected to the database ' + name);
})('db2');

