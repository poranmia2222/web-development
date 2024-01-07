// function for getInputFieldValue

function getInputFieldValue (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// function for addition in deposit or withdraw

function updateField (inputValue, transactionId){
    const currentTransaction = document.getElementById(transactionId);
    const newTransaction = parseFloat(currentTransaction.innerText);
    currentTransaction.innerText = newTransaction + inputValue; 
}

// function for totalBalance

function totalBalance(){
    const currentBalance = document.getElementById('balance');
    const currentBalanceAmount = parseFloat(currentBalance.innerText);
    return currentBalanceAmount
}

// function for balance update

function updateBalance(amount, addAmount){

    const currentBalance = document.getElementById('balance');
    const currentTotalBalance = totalBalance();

    
    if(addAmount == true){
        currentBalance.innerText = currentTotalBalance + amount
    }
    else{
        currentBalance.innerText = currentTotalBalance - amount
    }
}
// event for deposit button

document.getElementById('deposit-btn').addEventListener('click', function(){
   
    const depositFieldAmount = getInputFieldValue('deposit-field');

    if(depositFieldAmount > 0){
        
        updateField(depositFieldAmount, 'deposit');

        updateBalance(depositFieldAmount, true);
    }
})

// event for withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const withdrawFieldAmount = getInputFieldValue('withdraw-field');
    const totalbalanceAmount = totalBalance()
    
    if(withdrawFieldAmount > 0 && withdrawFieldAmount <= totalbalanceAmount){
        updateField(withdrawFieldAmount, 'withdraw');
        updateBalance(withdrawFieldAmount, false);
    }
})