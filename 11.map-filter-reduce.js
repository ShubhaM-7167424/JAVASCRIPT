// map
// The map() method creates a new array by performing a function on each array element.


let array = [1, 2, 3, 4, 5]

const a = array.map((element)=>{
    return element*2
})

// console.log(a);

// *************************************************************
// filter
// The filter() method creates a new array with array elements that pass a test.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let b = arr.filter((element) => {
    return element % 2 == 0
})

// console.log(b);

let c = arr.filter((e) => {
    return e > 7
})

// console.log(c);

// *************************************************************
// reduce 
// The reduce() method runs a function on each array element to produce (reduce it to) a single value
// The reduce() method does not reduce the original array.
let arr1 = [1, 2, 3, 4, 5]

let d = arr1.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(d);