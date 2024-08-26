// ! synchronus 

//* ex1
// function add(a,b) {
//     return a+b;
// }

// function Calculate(a, b, sum) {
//     console.log('Result is : ', sum(a, b));
// }

// Calculate(4, 5, add)

//* ex2
//* run this code on this website to understand event loop latentflip.com 
//  function getUserData(task) {
//    // do network calls and get user data
//    let data = [10, 20, 47];

//    task(data);
//  }

//  getUserData(function (userData) {
//    console.log(userData);
//  });

//* ex3
//! setTimeout callback functions are put in the callback queue

    //    function getUsersFromFacebook(cb) {
    //         //do network calls and get users
    //         let users = [{name: 'shubham'}, {name: 'vijay'}]
    //         cb(users)
    //    }
    //    function getUsersPost(users, cb) {
    //         //do api calls and find users post
    //         let posts = [{post1: 'good morning'}, {post2: 'enjoying holiday'}]
    //         cb(posts)
    //    }
    //    console.log('line 1');
    //    setTimeout(() => {
    //        getUsersFromFacebook(function (users) {
    //             console.log(users);
    //             setTimeout(() => {
    //                  getUsersPost(users, function (posts) {
    //                     console.log(posts);    
    //                 })
    //             }, 0);
    //        })
    //    }, 0);
    //    console.log('line 2');

// *********************************************************

// ! asynchronus
//? asynchronus means doing multiple task at a same time
// console.log('line 1');
// console.log('line 2');
// setTimeout(() => {
//     console.log('line 3');
// }, 3000);
// setTimeout(() => {
//     console.log('line 4');
// }, 1000);
// console.log('line 5');


// *********************************************************

let heading1 = document.getElementById('one')
let heading2 = document.getElementById('two')
let heading3 = document.getElementById('three')
let button = document.getElementById('btn')

button.addEventListener('click', ()=>{
    setTimeout(() => {
        heading1.style.color = 'red'
        setTimeout(() => {
            heading2.style.color = 'green'
            setTimeout(() => {
                heading3.style.color = 'blue'
            }, 1000);
        }, 1000);
    }, 1000);
})




