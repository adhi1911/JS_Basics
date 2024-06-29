let value = 44;
let val = '44';
console.log('value : '+typeof value); // number
console.log('val : '+typeof(val)); // string

let valueInNumber = Number(val);
console.log('valueInNumber : '+typeof valueInNumber); // number

//'44abc' -> NaN
//null -> 0
//undefined -> NaN
//true -> 1
//false -> 0
//'' -> 0
//' ' -> 0
console.log(Number('44abc'));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number(''));
console.log(Number(' '));

//booelan
console.log('0 : '           +Boolean(0)); //false
console.log('1 : '           +Boolean(1)); //true
console.log("' ' : "         +Boolean('')); //false
console.log('"  " : '        +Boolean(' ')); //true
console.log('abc : '         +Boolean('abc')); //true
console.log('null : '        +Boolean(null)); //false
console.log('undefined : '   +Boolean(undefined)); //false
console.log('{} : '          +Boolean({})); //true
console.log('[] : '          +Boolean([])); //true
console.log('Symbol() : '    +Boolean(Symbol())); //true
console.log('function(){} : '+Boolean(function(){})); //true

// CONVERSION OPERATIONS


let str1 = 'hello'
let str2 = 'world'
console.log(str1 + ' ' + str2); // hello world
str3 = str1 + str2;
console.log(str3); // helloworld

console.log('5' + 5); // 55

console.log('5' - 4); // 1
console.log('5' - '4'); // 1

console.log('5' * 4); // 20

console.log('true false : ')
console.log(+true); // 1
console.log(-true); // -1
console.log(+false); // 0
console.log(-false); // -0


console.log('post increment and pre increment: ')

let iter = 10;
console.log('post increment: ');
console.log(iter++);
console.log(iter);
console.log('pre increment: ');
console.log(++iter);
console.log(iter);