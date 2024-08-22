//! synchronus / Blocking Code 

// console.log(1);
// console.log(2);
// function hello() {
//     for (let i = 0; i < 100; i++) {
//         console.log('hello');        
//     }
// }
// hello()
// console.log(3);

//! Asynchronus / Non-Blocking Code

console.log(1);
console.log(2);
function hello() {
  for (let i = 0; i < 100; i++) {
    console.log("hello");
  }
}
setTimeout(hello, 3000);
console.log(3);