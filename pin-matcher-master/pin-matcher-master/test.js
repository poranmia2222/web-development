function getPin(){
    const generatePin = Math.round(Math.random() * 10000);
    const getPinNumber = generatePin + '';
    if(getPinNumber.length == 4){
        return generatePin;
    }
    else{
        return getPin();
    }
}


document.getElementById('generate-pin').addEventListener('click', function(){
   const pinNumber =  getPin();
   document.getElementById('pin-field').value = pinNumber;
})


document.getElementById('number').addEventListener('click', function(event){
    const number = event.target.innerText;
    const pinInput = document.getElementById('input-pin');

    if(isNaN(number)){
        if(number == 'C'){
            pinInput.value = '';
        }
    }
    else{
        const previousPin = pinInput.value
        const newNumber = previousPin + number;
        pinInput.value = newNumber;
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
