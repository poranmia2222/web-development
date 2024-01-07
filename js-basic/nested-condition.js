var myBudget = 10000;
var forPhone = 90000;
var sony = 5500000
var iphone = 650000;
var xaomi = 1070000;
var google = 100000;

if (myBudget > forPhone){
    if(myBudget > sony){
        console.log('i can buy a sony phone');
    }
    else if(myBudget > iphone){
        console.log('i can also buy a iphone');
    }
    else if(myBudget == xaomi){
        console.log(' i can buy the best xaomi');
    }
    else{
        console.log(' i can use my best phone google pixle 6+');
    }
}
else{
    console.log('i can not buy any phone');
}