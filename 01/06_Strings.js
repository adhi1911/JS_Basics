/*

## Method 1: String Literal
```javascript
let name = 'Adhi';
```

### System Perspective:
- Direct primitive value stored in memory
- More memory efficient
- Faster performance
- Immutable value
- Takes up less space in memory stack

### Developer Perspective:
- Cleaner syntax
- Automatically coerced to String object when methods are called
- Recommended approach
- Better for equality comparisons (`==` and `===`)

## Method 2: String Object Constructor
```javascript
const nam = new String('Cricket');
```

### System Perspective:
- Creates a wrapper object
- More memory overhead
- Slower performance
- Creates an object in heap memory
- Has additional object properties

### Developer Perspective:
- Can lead to unexpected behavior in comparisons
- Not recommended unless specifically needed
- More complex internal structure
- Can cause confusion with `typeof` operator

## Key Differences Demonstrated:
```javascript
// Type checking
typeof 'Adhi'               // returns "string"
typeof new String('Adhi')   // returns "object"

// Equality comparison
'Adhi' === 'Adhi'                         // true
new String('Adhi') === new String('Adhi') // false (comparing objects)

// Memory usage
console.log('Adhi'.length)                // 4
console.log(new String('Adhi').length)    // 4 (but wrapped in object)
```

Best Practice: Always use string literals (`''` or `""`) unless you have a specific reason to use the String constructor.
*/

const name = 'Adhi'; // string
const age = 20; // number

console.log(name + age ); // Adhi20

// string interpolation
console.log(`Name is ${name} and age is ${age}`); 
// Name is Adhi and age is 20

const game = new String('Cricket');

console.log(game[0]); // C
console.log(game.length); // 7
console.log(game.__proto__); // String
console.log(game.__proto__.__proto__); // Object
//What is __proto__?
//__proto__ is a reference to the object's prototype.
//Every object in JavaScript has a prototype.
//The prototype is also an object.
//The prototype object has a constructor property.
//The constructor property points back to the function that created the object.


/*
```javascript
const game = new String('Cricket');
```

### Prototype Chain Breakdown

1. **Accessing Properties**:
```javascript
console.log(game[0]);                    // 'C'         - character access
console.log(game.length);                // 7           - property access
console.log(game.__proto__);             // String      - prototype reference
console.log(game.__proto__.__proto__);   // Object      - parent prototype
```

### Visual Representation of Prototype Chain:
```
game (String object)
↓ __proto__
String.prototype (contains string methods)
↓ __proto__
Object.prototype (base object methods)
↓ __proto__
null
```

### Modern Way to Access Prototypes
```javascript
// Modern approach (preferred)
console.log(Object.getPrototypeOf(game));              // String prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(game))); // Object prototype
```

### Important Notes:
- `__proto__` is deprecated for production code
- Use `Object.getPrototypeOf()` instead
- Every object inherits from `Object.prototype`
- The prototype chain enables inheritance in JavaScript
- String methods like `charAt()`, `indexOf()` come from `String.prototype`

### Example of Inheritance:
```javascript
// Methods available through prototype chain
console.log(game.toUpperCase());      // 'CRICKET'  - from String.prototype
console.log(game.toString());         // 'Cricket'  - from Object.prototype
```

This prototype chain is fundamental to JavaScript's prototypal inheritance system.
*/ 


//string methods
console.log(game.toUpperCase()); // CRICKET
console.log(game.toLowerCase()); // cricket
console.log(game.indexOf('C')); // 0
console.log(game.indexOf('c')); // 2
console.log(game.lastIndexOf('c')); // 6
console.log(game.charAt(0)); // C
console.log(game.charAt(1)); // r
console.log(game.substring(0,3)); // Cri
console.log(game.substring(3)); // cket
console.log(game.slice(0,3)); // Cri
console.log(game.slice(3)); // cket
console.log(game.slice(-3)); // ket
console.log(game.slice(0,-3)); // Cric
console.log(game.split('')); // ['C', 'r', 'i', 'c', 'k', 'e', 't']
console.log(game.replace('Cricket', 'Football')); // Football
console.log(game.replace('c', 'f')); // Fricket
console.log(game.includes('C')); // true
console.log(game.includes('c')); // true
