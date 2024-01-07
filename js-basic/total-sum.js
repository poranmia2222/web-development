let numbers = [12, 13, 15, 17, 11, 19];

let sum = 0;
for(let i = 1; i< numbers.length; i++){
    let num = numbers[i];
    sum = sum + num;
}
console.log(sum);

function totalSum (num1){
    let sum = 0;
    for(let i = 0; i < num1.length; i++){
        const element = num1[i];
        sum = sum + element;
        
    }
    return sum;
}

let number = [12, 13, 15, 17, 11, 19];
let allnumbers = totalSum(number);
console.log(allnumbers)