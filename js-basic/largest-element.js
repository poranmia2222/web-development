function largest (num){
    let largestNum = 12;
    for(let i = 0; i < num.length ; i++){
        let element = num[i];
        if(element < largestNum){
            largestNum = element;
        }
    }
    return largestNum;
}
let numbers = [12, 34, 53, 45, 6, 1324, 21, 45, 12, 89];
let numbers1 = [-12, -34, -53, -45, -1324, -21, -45, -12, -89];
let largestNumbers =largest(numbers);
console.log(largestNumbers);