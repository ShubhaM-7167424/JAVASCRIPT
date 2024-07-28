//? var
//? var keyword was used in earlier codes
//? variable declared using 'var' can be redeclared and reassigned
//? var is function scoped or global scoped
//? var variables are initialized with 'undefined' value
function varExample() {
  var x = 10;
  var x = 20; // This is allowed
  console.log(x); // Output: 20

  if (true) {
    var y = 30;
  }
  console.log(y); // Output: 30
}


//? let
//? let keyword was introduced in ES6 (2015)
//? variable declared using 'let' cannot be redeclared but can be reassigned
//? let variables are block scoped
function letExample() {
  let z = 10;
  // let z = 20; // This will throw an error
  console.log(z); // Output: 10

  if (true) {
    let w = 30;
  }
  // console.log(w); // This will throw an error
}

//? const
//? const keyword was introduced in ES6 (2015)
//? variable declared using 'const' cannot be redeclared and cannot be reassigned
//? const variables are block scoped

function constExample() {
  const a = 10;
  // const a = 20; // This will throw an error
  console.log(a); // Output: 10

  if (true) {
    const b = 30;
  }
  // console.log(b); // This will throw an error
}

// *****************************************************************
