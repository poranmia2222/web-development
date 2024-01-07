function isLeapYear(yourYear){
 if(yourYear % 400 == 0){
    return true
 }
 else if(yourYear % 100 == 0){
    return false;
 }
 else if(yourYear % 4 == 0 ){
    return true;
 }
 else{
    return false;
 }
}
var year = 2245;
var isYourYearLeapYear  = isLeapYear(year);
console.log('yes it is a leap year', isYourYearLeapYear);