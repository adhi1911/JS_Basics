const user = {  
    name: 'Adhi',
    age: 23,

    welcomeMessage : function(){
        return `Hello ${this.name}`;
    }
};

//console.log(user.welcomeMessage(name = 'hehe')); // Hello Adhi
//console.log(this); // {}

user.name = 'Adhitya';
//console.log(user.welcomeMessage()); // Hello Adhitya

// Arrow function
function trying(){
    console.log(this);
}
//trying(); // many things

const arrowTrying = () => {
    console.log(this);
}
arrowTrying(); // {}

const user2 = {
    name: 'Adhi',
    age: 23,

    welcomeMessage : () => {
        return `Hello ${this.name}`;
    }
};

const addtwo = (num1, num2) => (num1 + num2);
//console.log(addtwo(2, 3)); // 5

const returnobj = () => ({name: 'Adhi', age: 23});