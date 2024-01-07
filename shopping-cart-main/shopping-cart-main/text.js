function productUpdate(product,price, plus){
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    if(plus == true){
        productNumber = productNumber + 1;
    }
    else if(productNumber > 0){
        productNumber = productNumber - 1;
    }

    productInput.value = productNumber;


    const ProductTotal = document.getElementById(product + '-total');
    const ProductTotalPrice = productNumber * price;
    ProductTotal.innerText = ProductTotalPrice;

    totalPrice()
}

function getInputValue (productName){ 
    const productInput = document.getElementById(productName + '-number');
    const productinputTotal = parseInt(productInput.value);
    return productinputTotal;
    
}


function totalPrice(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalAmount = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;



}



document.getElementById('phone-plus').addEventListener('click',  function(){
    productUpdate('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click',  function(){
    productUpdate('phone', 1219, false)
})


document.getElementById('case-plus').addEventListener('click',  function(){
    productUpdate('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click',  function(){
    productUpdate('case', 59, false)
})