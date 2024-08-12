// let target = document.getElementById('box')
// console.log(target);

// let target = document.getElementsByClassName('para')
// console.log(target);

// let target = document.getElementsByTagName('p')
// console.log(target);

//* it selects only the first div element 
// let target = document.querySelector('div')
// console.log(target);

// let target = document.querySelectorAll('#container')
// console.log(target );

// **************************************************

let newElement = document.createElement('a')
let parentNode = document.getElementById('box')

// parentNode.appendChild(newElement)

// **************************************************

let targetElement = document.getElementById('container')

targetElement.insertAdjacentElement('beforeend', newElement)