// we can add  or remove array element by uesing push and pop
// push and pop for add and remove element form last iteam


//push() method is used to add new items to the end of an array.

var classList = ['class 1', 'class 2', 'class 3', 'class 4', 'class 5'];
classList.push('class 6');
console.log(classList);

// pop() method is used to remove the last item of an array.
// shift() method is used to remove the first item of an array. After removal of the first item all items are shifted forward and their index change respectively.


var age = [12, 13, 14, 15, 16, 17, 78, 89];
age.pop();
console.log(age)

// we can also find the removed iteam
var ages = [12, 13, 14, 15, 16, 17, 78, 89];
var removeIteam = ages.pop();
console.log(ages);
console.log(removeIteam);