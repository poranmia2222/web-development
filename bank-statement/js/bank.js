document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    if(userEmail == 'poranmia@gmail.com' && userPassword == 'asp123'){
        window.location.href = 'account.html';
    }
    else{
        console.log('The information not matching. Please try aging with courrect one')
    }
    emailField.value = '';
    passwordField.value = '';
})