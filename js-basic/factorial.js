var factorial = 1;
for(let i = 1; i <= 9; i++){
    factorial = factorial * i;
}
console.log(factorial);


// factorial by using function
function fact(num){
    var factorial = 1;
    for( let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var factNumber = 6;
var getFactorial = fact(factNumber);
console.log('this factorial of this number:',getFactorial);


//factorial with while loop

function fact(num1){
    var factorial = 1;
    let i = 1;
    while(i <= num1){
        factorial = factorial * i;
        i++
    }
    return factorial;
}
var factNumber = 9;
var getFactorial = fact(factNumber);
console.log('this factorial of this number:',getFactorial)