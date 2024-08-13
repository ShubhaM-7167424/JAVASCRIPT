//? Remove Elements

// let element = document.getElementById('container')
// element.remove()

// let parent = document.getElementById('parent')
// let child = document.getElementById('child')
// parent.removeChild(child)

//? Get text elements 

//* innerHTML => return text including tags, return hidden text
//* innerText => return plain text, doesn't return hidden text
//* textContent => return plain text, return hidden text

// let box = document.getElementById('box')
// console.log(box.innerText);
// console.log(box.innerHTML);
// console.log(box.textContent);

// let heading = document.getElementById('h1')
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.textContent);

// let box = document.getElementById('box')
// box.innerText = 'Hiiiii'

//? Styling text 

let heading2 = document.getElementById('h2')
heading2.style.color = 'red'

heading2.style.cssText = "color: green ; font-size: 4em; background-color: violet"

heading2.style.backgroundColor = ""
