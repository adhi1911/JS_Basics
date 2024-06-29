//comparing with 0;
console.log('Comparing with 0: ')
console.log('0 == false : ' + (0 == false)); // true
console.log('0 == true : ' + (0 == true)); // false
console.log('0 == null : ' + (0 == null)); // false
console.log('0 == undefined : ' + (0 == undefined)); // false
console.log('0 == NaN : ' + (0 == NaN)); // false
console.log('0 == 0 : ' + (0 == 0)); // true
console.log('0 == "0" : ' + (0 == "0")); // true
console.log('0 == " " : ' + (0 == " ")); // true
console.log('0 == "  " : ' + (0 == "  ")); // true

console.log('"2" > 0 : ' + ("2" > 0)); // true  
console.log('"02" > 0 : ' + ("02" > 0)); // true

console.log('null>0 : ' + (null > 0)); // false
console.log('null>=0 : ' + (null >= 0)); // true


