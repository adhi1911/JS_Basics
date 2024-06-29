//--------Scopes in JavaScript--------
// Global Scope
// Local Scope
// Block Scope
// Lexical Scope

// --- {} - Block Scope
// --- var - Function Scope
// --- let, const - Block Scope

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
//console.log(a); // 10
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // ReferenceError: c is not defined

function one(){
    const userName = "adhi";

    function two(){
        const website = "adhi.com";
        console.log(userName);
    }
    //console.log(website); // ReferenceError: website is not defined
    two();

}
one();

// Lexical Scope
// what is lexical scope?
// Lexical scope is a scope in which variables are defined in a program.
// It is also known as Static Scope.
// JavaScript uses Lexical scoping by default.
// It means that the scope of the variables is determined during the compile time.
// The scope of the variable is defined by the position of the variable declaration within the code.
// The inner function can access the variables of the outer function.
// The outer function cannot access the variables of the inner function.
