let heading1 = document.getElementById("one");
let heading2 = document.getElementById("two");
let heading3 = document.getElementById("three");
let button = document.getElementById("btn");

button.addEventListener('click', async ()=>{
    try {
        await addColor(heading1, "red", 1000);
        await addColor(heading2, "yellow", 5000);
        await addColor(heading3, "green", 2000);
    } catch (error) {
        console.log(error);
    }
})

function addColor(element, color, time) {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        } else {
            reject(new Error('element not found'));
        }
    });
}