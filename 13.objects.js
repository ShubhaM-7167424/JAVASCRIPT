const person = {
    name : 'rahul',
    age: 24,
    gender: 'Male',
    greet: function(){
        console.log('Good Morning');
    }
}

// console.log(person.name);
// console.log(person['gender']);

person.age = 25
person.job = 'devloper'

// console.log(person);

// person.greet()

// add a method in the object 
person.hello = function(){
    console.log('Hello');
}
console.log(person.greet());

// ***************************************************************

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// JavaScript objects can be converted to a string with JSON method JSON.stringify()
let string = JSON.stringify(person);
console.log(string);

let obj = JSON.parse(string);
console.log(obj);


for(let [key, value] of Object.entries(person)){
    console.log(key, value);
}

// **********************************************************

