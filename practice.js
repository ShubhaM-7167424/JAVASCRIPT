function factorialOfANumber(number) {
    let fact=1;
    for(let i=number ; i>=1; i--){
        fact=fact*i;
    }
    return fact;
}


console.log(factorialOfANumber(5));
