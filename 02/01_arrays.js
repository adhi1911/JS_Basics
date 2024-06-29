//-----------Arrays----------------//
// Arrays are used to store multiple values in a single variable.

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr2 =  new Array(1, 2, 3, 4, 5,'string', true);
console.log(arr2);
//arrays are resizable
arr2[6] = 'new value';
console.log(arr2);

//copy ooperation creates a shallow copy
//shallow copy means if the array contains objects, then the reference of the objects will be copied, not the objects themselves.

const arr3 = arr2;
console.log(arr3);
arr3[7] = 'another value';
console.log(arr3);
console.log(arr2);

//7th value added in arr3 is reflected in arr2 also.

//then comes deep copy
//deep copy means the objects themselves will be copied.
//for deep copy we can use spread operator or slice method.
const arr4 = [...arr2];
console.log(arr4);
arr4[8] = 'deep copy value';
console.log(arr4);
console.log(arr2);

//-----------------Array Methods-----------------//

arr.push(6);
console.log(arr.pop());
console.log(arr);

arr.unshift(12);
console.log(arr.shift());
console.log(arr);
/*
push() - adds an element at the end of the array.
pop() - removes the last element from the array.
unshift() - adds an element at the beginning of the array.
shift() - removes the first element from the array.
includes() - checks if an element is present in the array.
indexOf() - returns the index of the element in the array.
reverse() - reverses the array.
join() - converts the array into a string.
slice() - returns a part of the array.
splice() - adds or removes elements from the array.
concat() - joins two arrays.
sort() - sorts the array.
filter() - filters the array based on a condition.
map() - creates a new array by performing a function on each element.
reduce() - reduces the array to a single value.
forEach() - iterates over the array.
find() - returns the first element that satisfies the condition.
*/

//filter , map , reduce
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArr = arr5.filter((value) => value > 5);
console.log(filteredArr);
//map
const mappedArr = arr5.map((value) => value * 2);
console.log(mappedArr);
//reduce
const reducedArr = arr5.reduce((acc, value) => acc + value, 0);
console.log(reducedArr);


//------slice and splice
const arr6 = [1, 2, 3, 4, 5];
const slicedArr = arr6.slice(1, 3);

console.log("slice: "+slicedArr);
console.log("original: "+arr6);

const splicedArr = arr6.splice(1, 4);
console.log("splice: "+splicedArr); 
console.log(arr6);

//-----arrays-----

let game1 = ['cricket', 'football', 'hockey'];
let game2 = ['volleyball', 'basketball', 'tennis'];

// console.log(game1.push(game2));

console.log(game1.concat(game2));

//access 'tennis' from game1
console.log(game1[2]);


//... spread operator
let game3 = [...game1, ...game2];
console.log(game3);

// flat() method
let game4 = [game1, game2];
console.log(game4);
console.log(game4.flat());
