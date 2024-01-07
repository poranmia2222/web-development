//The (if...else) statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.


var phonePrice = 900;
if (phonePrice != 790){
    // console.log('i can not buy a new phone');
}

var carPrice  = 1012000;
var bikePrice = 554000;
var myBudget = 30000;

if (myBudget > carPrice){
    console.log('i will buy a new car')
}
if (myBudget > bikePrice){
    console.log('i will buy a new bike')
}
else{
    console.log('i will buy a cicle for me')
};