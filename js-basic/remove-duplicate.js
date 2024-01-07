let num = [12, 43, 12, 53, 23, 56, 89, 23, 56];
function remove(numbers){
    let uniqeNumber = [];
    for(const element of numbers){
        if(uniqeNumber.indexOf(element) == -1){
            uniqeNumber.push(element);
        }
    }
    return uniqeNumber;
}
let removeDuplicateNumber = remove(num);
console.log(removeDuplicateNumber);