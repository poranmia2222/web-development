function findHighestNumber (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }
    else if ( num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}



let iphonePrice = 1000000;
let androidPrice = 56000;
let windowsPrice = 720000;
let allNumber = findHighestNumber(iphonePrice, androidPrice, windowsPrice);
console.log(allNumber);
// if(windowsPrice > iphonePrice && windowsPrice > androidPrice){
//     console.log('windows price are soo high')
// }
// else if(androidPrice > iphonePrice && androidPrice > windowsPrice){
//     console.log('android price are soo high')
// }
// else if(iphonePrice > androidPrice && iphonePrice > windowsPrice){
//     console.log('iphone price are soo high')
// }
// else{
//     console.log('all are low price')
// }

let cheackHighPriceOfPhone = Math.max(iphonePrice, androidPrice, windowsPrice);
// console.log(cheackHighPriceOfPhone);