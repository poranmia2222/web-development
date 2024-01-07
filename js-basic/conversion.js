// to add string
var firstName = 'poran';
var lastName = 'Mia';
var fullName = firstName + ' ' + lastName; // two add a spece bettewn two word we shoud use a dubble quet;
console.log(fullName);

// to convert string number to a integer number; number are two type in here one is integer and other floating number

// to convert a string number to a integer we shoude " parseInt() " 

var bookPrice = '560';
var penPrice = '75';

var totalPrice1 = bookPrice + penPrice; // without convert the string

var totalPrice = parseInt(bookPrice) + parseInt(penPrice); // use parseInt() for convert the string in to a integer


console.log(totalPrice); // totalPrice1 for without convert and totalPrice1 for after convert;

//////////////////////////////////////////

// to convert a float string number to a floating point number

// to convert a float string number to a floating point number we shoude " parseFloat() " 

var perEggsPrice = '9.56';
var perMeetPrice = '705.15';

var totalPriceEggMeet = perEggsPrice + perMeetPrice; // without convert
var totalPriceEggMeet1 = parseFloat(perEggsPrice) + parseFloat(perMeetPrice); // convert to floating point

console.log(totalPriceEggMeet1)