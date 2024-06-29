//------------------Objects------------------//

//singleton object
//means only one object is created

const mysym = Symbol('symbol');

let person = {
    name: 'Adhi',
    age: 20,
    isMale: true,
    address: {
        city: 'Nashik',
        state: 'Maharashtra'
    },
    sym : Symbol('symbol'),
    [mysym] : 'symbol value'
};
console.log(person);

//accessing object properties
console.log(person.name);
console.log(person['address']['city']);
console.log(person.address.state);
console.log(person.sym);
console.log(typeof person[mysym]);

//adding new properties
person.email = 'adhi@mail.com';
console.log(person);

//deleting properties
delete person[mysym];
console.log(person);

//Freeze object
// Object.freeze(person);
//object cannot be altered now

person.greeting= function(){
    console.log('Hello');
}
console.log(person.greeting); //undefined
//console.log(person.greeitng()); //error

person.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}
person.greeting();
person.greeting2();
console.log(person.greeting2);
