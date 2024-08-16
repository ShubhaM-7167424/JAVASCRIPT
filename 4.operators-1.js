//? Arithmetic operator

let a = 12
let b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b);  // gives the remainder

console.log(a ** b);    // a raised to the power b

a++;
console.log(a);

b--
console.log(b);

// =======================================================

//? comparison operator

//* '==' Compares two values  after converting both values to a common type (type coercion)

//* '===' Compares two values   without converting them to a common type. Both the value and the type must be the same.

console.log(5 == "5");       // true (type conversion happens)
console.log(true == 1);      // true (true is converted to 1)
console.log(null == undefined); // true
console.log(0 == false);     // true (0 is converted to false)

console.log(5 === "5");      // false (different types)
console.log(true === 1);     // false (different types)
console.log(null === undefined); // false (different types)
console.log(0 === false);    // false (different types)
console.log(5 === 5);        // true (same value and type)


console.log('====================================');
let c = 10
let d = '10'

console.log(c == d);
console.log(c === d);

console.log("====================================");
let e = 20
let f = '20'

console.log(e != f);
console.log(e !== f);


// **********************************************************************

//? When comparing objects, they are compared by reference, not by value. Two objects are equal only if they reference the same memory location.

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
const obj3 = obj1;

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true
