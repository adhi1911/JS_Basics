const name = 'Adhi'; // string
const age = 20; // number

console.log(name + age ); // Adhi20

// string interpolation
console.log(`Name is ${name} and age is ${age}`); 
// Name is Adhi and age is 20

const game = new String('Cricket');

console.log(game[0]); // C
console.log(game.length); // 7
console.log(game.__proto__); // String
console.log(game.__proto__.__proto__); // Object
//What is __proto__?
//__proto__ is a reference to the object's prototype.
//Every object in JavaScript has a prototype.
//The prototype is also an object.
//The prototype object has a constructor property.
//The constructor property points back to the function that created the object.

//string methods
console.log(game.toUpperCase()); // CRICKET
console.log(game.toLowerCase()); // cricket
console.log(game.indexOf('C')); // 0
console.log(game.indexOf('c')); // 2
console.log(game.lastIndexOf('c')); // 6
console.log(game.charAt(0)); // C
console.log(game.charAt(1)); // r
console.log(game.substring(0,3)); // Cri
console.log(game.substring(3)); // cket
console.log(game.slice(0,3)); // Cri
console.log(game.slice(3)); // cket
console.log(game.slice(-3)); // ket
console.log(game.slice(0,-3)); // Cric
console.log(game.split('')); // ['C', 'r', 'i', 'c', 'k', 'e', 't']
console.log(game.replace('Cricket', 'Football')); // Football
console.log(game.replace('c', 'f')); // Fricket
console.log(game.includes('C')); // true
console.log(game.includes('c')); // true
