const char = 'this how i treat you';
function reversedChar (text){
    let reversed = '';
    for(const reverse of text){
        reversed = reverse + reversed;
    }
    return reversed;
}
let letter = reversedChar(char);
console.log(letter);