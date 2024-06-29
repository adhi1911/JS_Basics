// const user = new Object(); //singleton object

const user = {}; //non singleton object

user.id = 1;
user.name = 'Adhi';
user.age = 20;
// console.log(user);

const regulearUser = {
    email : 'user@demo.com',
    fullname :{
        firstname :'User',
        lastname : 'Demo'
    },
    address : {
        city : 'Jakarta',
        country : 'Indonesia'
    }
};

// console.log(regulearUser.fullname);

// joininig object

//const user2 = {user , regulearUser};
//console.log(user2);
 /*{
    user: { id: 1, name: 'Adhi', age: 20 },
    regulearUser: {
      email: 'user@demo.com',
      fullname: { firstname: 'User', lastname: 'Demo' },
      address: { city: 'Jakarta', country: 'Indonesia' }
    }
  }
    */

// const user2 = {...user, ...regulearUser};
const user2 = Object.assign({}, user, regulearUser);  //(target, source1, source2, source3, ...)

console.log(user2);

console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2)); //return array of array 


