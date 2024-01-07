function factorial(number){
    if(number == 1){
        return 1;
    }
    return number*factorial(number-1);
}
var fact = 5;
var getFactorial = factorial(fact);
console.log(getFactorial);





