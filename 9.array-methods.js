// Array Methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits.at(-3));
console.log(fruits.join("*"));
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Kiwi"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Lemon"));
console.log(fruits);
fruits[fruits.length] = "Grapes";
console.log(fruits);

// ***********************************************************

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [11, 12, 13, 14, 15]

console.log(arr2.concat(arr1));
console.log(arr1.concat(arr2, arr3));
console.log(arr3.concat('hello'));

delete arr1[0]
console.log(arr1);
console.log(arr1.length);

// ***********************************************************
// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0));

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits1.copyWithin(2, 0, 1));

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits2.copyWithin(2, 0, 2));

const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits3.copyWithin(2, 0, 3));

// ***********************************************************
// The flat() method creates a new array with sub-array elements concatenated to a specified depth

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// ***********************************************************

let arr4 = [1, 2, 3, 4, 5]

console.log(arr4.reverse());
console.log(arr4);
// ***********************************************************

// The splice() method adds new items to an array.
// The splice() method returns an array with the deleted items:
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

// The slice() method slices out a piece of an array.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(removed);
console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);
console.log(months);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
console.log(citrus);
console.log(fruits);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(citrus);
console.log(fruits);

// ***********************************************************

