var iphonePrice = 105000;
var xaomiPrice = 1050050;
var samphonyPrice = 950000;
var samsungPrice = 5500500;
var buttonPhonePrice = 1600;
var myBudget = 10000050;

if ((myBudget == iphonePrice) || (myBudget > xaomiPrice)){
    console.log('i can buy xaomi and iphone too');
}
else if (myBudget > iphonePrice && myBudget > xaomiPrice || myBudget > buttonPhonePrice){
    console.log('i shoud buy a button phone');
}
else{
    console.log('i can not buy a phone');
}