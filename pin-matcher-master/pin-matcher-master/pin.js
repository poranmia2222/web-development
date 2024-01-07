function getPin(){
    const generatePinnumber = Math.round(Math.random() * 10000);
    const generatePin = generatePinnumber + '';
    if(generatePin.length == 4){
        return generatePinnumber;
    }
    else{
        return getPin();
    }
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    document.getElementById('pin-field').value = pin;
})



document.getElementById('number').addEventListener('click', function(event){
    const number = event.target.innerText;

    const inputPin = document.getElementById('input-pin');
   
   if(isNaN(number)){
    // console.log('this not a number')
     if(number == 'C'){
        inputPin.value = '';
    }
   }
   
   
    else{
    const previousInput = inputPin.value;
    const newInput = previousInput + number;
    inputPin.value =  newInput;
    }
    
})


document.getElementById('submit-btn').addEventListener('click', function(){
    const pinField = document.getElementById('pin-field').value
    const typeField = document.getElementById('input-pin').value
    const successNotify = document.getElementById('success-notify');
    const failNotify = document.getElementById('fail-notify');

    if( pinField == typeField){
        successNotify.style.display = 'block';
        failNotify.style.display = 'none'
    }
    else{
        successNotify.style.display = 'none';
        failNotify.style.display = 'block'
    }
})
