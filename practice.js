function outer() {
    let a = 10;
    function inner() {
        function inner2() {
            let b = 5;
            let c = a + b;
            console.log(c);
            
        }
        inner2();
    }
    return inner;
}

let result = outer();
console.log(result());

