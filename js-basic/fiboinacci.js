// var number = [0, 1];
// for(let i = 2; i <= 10; i++){
//     number[i] = number[i-1] + number[i-2];
// }
// console.log(number);



//by doing function

function fiboinacchi (number){
    let fibo = [0, 1];
    for (let i = 2; i <= number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let num = '21';
let fibonacchiNumber = fiboinacchi(num);
// console.log(fibonacchiNumber);



//recall fibonacchi


function fibonacchiSerice(n){
    if(n == 0){
        return [0];
    }
    if (n == 1){
        return [0, 1];
    }
    const fibo = fibonacchiSerice(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo
}
const fiboElement = fibonacchiSerice(15);
console.log(fiboElement);