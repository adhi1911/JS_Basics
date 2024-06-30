// foreach

// The forEach() method executes a provided function once for each array element.
const coding = [{
    name: 'JavaScript',
    level: 'Intermediate'
}, {
    name: 'Python',
    level: 'Beginner'
}, {
    name: 'Java',
    level: 'Advanced'
}];

coding.forEach((language) => {
    console.log(language.name, ' :- ', language.level);
});