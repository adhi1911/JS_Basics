const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('AU', 'Australia');

for(const[key,value] of map){
    console.log(key,' :- ' ,value);

}

const myobject = {
    name: 'John',
    age: 25,
    city: 'New York'
}

for(const[key,value] of Object.entries(myobject)){
    console.log(key,' :- ' ,value);
}  

