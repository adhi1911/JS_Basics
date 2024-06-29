const course ={
    name: 'JavaScript',
    duration: '3 months',
    instructor: 'Adhi',
    level: 'Beginner'
};


//object destructuring
const {name, duration, instructor : i, level} = course;
console.log(name);
console.log(duration);
console.log(i);
console.log(level);