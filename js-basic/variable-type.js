// to see variable type we can use (typeOf);
var age = 56;
console.log(typeof age);
var bookPrice = "970";
console.log(typeof bookPrice);

var fun = true;
console.log(typeof fun);

var name;
console.log(typeof name); //undefined for not complete the variable prosesse

var today = new Date();
console.log(typeof today);


//special edition for 

var firstPoint = 0.125465487;
var secondePoint = 0.1391;
var total = firstPoint + secondePoint;

total = total.toFixed(3); // Returns a string representing a number in fixed-point notation. Number of digits after the decimal point. Must be in the range 0 - 20, and it done in a string

console.log(total);

