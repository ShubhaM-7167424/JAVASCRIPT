//? Hoisting is the default behavior in javascript where variables and functions declaration are moved to the top of their containing scopes before the code execution

// console.log(a);
// var a = 5;  

//* output is undefined bcz the variable declaration is moved to the top with default initialization of undefined

// console.log(b);
// let b = 10;

//* here b is also moved to the top but not initialized , b is in the TDZ(temporal dead zone), same happen with c

// console.log(c);
// const c = 15;


//* functions declaration with the body moved to the top of their containing scopes

// sum(15, 6);
// function sum(x, y) {
//     console.log(x+y);
// }
// sum(5, 6);


//! hoisting of function doesn't work in case of function expression
sum(5, 10)
let sum = function (a,b) {
    console.log(a+b);
}