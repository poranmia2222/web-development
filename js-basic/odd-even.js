// odd number checking
function isOdd(num){
    if(num % 2 == 0){
        return false;
    }
    return true;
}
var number = 214234235;
var numberChecking = isOdd(number);
console.log(numberChecking);