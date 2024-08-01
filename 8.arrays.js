//* Arrays 
// arrays are collection of element
// arrays are mutable => means there element can be changed
//? The const keyword ensures that the reference to the array cannot be reassigned, but the contents of the array can still be modified.



const colors = ['red', 'green', 'blue']
console.log(colors);
console.log(colors[2]);
colors[3] = 'yellow'
console.log(colors);

colors[1] = 'grey'
console.log(colors);