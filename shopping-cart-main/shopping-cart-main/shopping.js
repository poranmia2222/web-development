function upadteProductNumber(product,price, plus ){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(plus == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber

    const productPrice = document.getElementById(product + '-total');
    productPrice.innerText = productNumber * price;
    
    calculateTotal()
}

// function minus(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputNumber = inputField.value;
//     inputField.value = parseInt(inputNumber) - 1;
// }

function getInputValue(products){
    const productInput = document.getElementById(products + '-number').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}


function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax ;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
}





document.getElementById('case-plus').addEventListener('click', function(){
    upadteProductNumber('case',59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    upadteProductNumber('case',59 , false);
})



document.getElementById('phone-plus').addEventListener('click', function(){
    upadteProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    upadteProductNumber('phone', 1219, false);
})