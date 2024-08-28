//! Promise ex1 
// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();

//     if(randomNumber > 0.5){
//         resolve(randomNumber);
//     }
//     else{
//         reject(new Error('The random no. is less than 0.5'));
//     }
// })

// promise.then((result) => {
//     console.log("The random no. is : ", result);
// }).catch((error) => {
//     console.log(error);
// })
// ************************************************************
//! ex 2
//! Promises
//! Promises are put in the microtask queue
// async function getUsersFromFacebook() {
//       const promise = new Promise(function (resolve, reject) {
//         //do newtork calls and get user data
//         let users = [{ name: "Shubham" }, { name: "Vijay" }];

//         if (users.length > 0) {
//           resolve(users);
//         } else {
//           reject("some problem while fetching users");
//         }
//       });      
//       return promise;
// }

// async function getPostsForUsers() {
//       const promise = new Promise(function (resolve, reject) {
//             //do api calls and get the posts
//             const posts = [{title: 'happy'}, {title: 'sad'}]
            
//             if(posts.length > 0){
//                   resolve(posts)
//             }else{
//                   reject('some problem while fetching posts')
//             }
//       })
//       return promise;
// }

// getUsersFromFacebook()
// .then(function (users) {
//       console.log(users);
//       return   getPostsForUsers(users[0])     
// })
// .then(function (posts) {
//       console.log(posts);
// })
// .catch(function (err) {
//       console.log(err);
// })

// ************************************************************
// !ex3

// console.log('line 1');
// console.log('line 2');

// async function bigTask() {
//       let count = 0;
//       for (let i = 0; i < 1000000000; i++) {
//         count++;
//       }      
//       return new Promise(function (resolve, reject) {
//             resolve(count)
//       })      
// }


// console.log('line 3');
// console.log('line 4');

// bigTask()
// .then(function (data) {
//       console.log(data);
// })
// ************************************************************

//! Promise ex4

let heading1 = document.getElementById("one");
let heading2 = document.getElementById("two");
let heading3 = document.getElementById("three");
let button = document.getElementById("btn");

button.addEventListener('click', ()=>{
    const a = addColor(heading1, "red", 1000)
    .then(()=> addColor(heading2, "green", 1000))
    .then(()=> addColor(heading3, "blue", 1000))
    .catch((err)=> console.log(err))
    console.log(a);
})

function addColor(element, color, time) {
    return new Promise((resolve, reject)=>{
        console.log(11);
        console.log(typeof resolve);
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            }, time)
        }
        else{
            reject(new Error("Element not found"));
        }
    })
}