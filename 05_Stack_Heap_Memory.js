// Stack , Heap 
//stack memory is used for primitive data types and reference to heap memory.

// Heap memory is used to store objects and functions.

let name = 'Adhi'; // string
let age = 20; // number
let isMale = true; // boolean
//stack memory
//name -> Adhi
//age -> 20
//isMale -> true

let person = {'name':'Adhi', 'age':20, 'isMale':true}; // object
//stack memory
//person -> address of heap memory
//heap memory
//address -> name -> Adhi
//address -> age -> 20
//address -> isMale -> true


