// closure is the ability of an inner function to access the variable of outer functions

let a = 10;
function outer() {
    function inner() {
        function inner2() {
            console.log(a);
        }
        inner2();
        }
    return inner
}

let result = outer();
result()
