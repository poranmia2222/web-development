// directly onclick

function purple(){
    document.body.style.backgroundColor = 'purple';
};



// just set name of the function

const limegreens = document.getElementById('limegreen');
    limegreens.onclick = lime;
    function lime(){
    document.body.style.backgroundColor = 'green';
};


// handel using anouymous funcition

const redButton = document.getElementById('red');

// anonymous function
redButton.onclick = function(){
    document.body.style.backgroundColor = 'red';
}


// handel by using addEvenlistener

const golden =document.getElementById('gold');
        golden.addEventListener('click', makeGolden);
        function makeGolden(){
            document.body.style.backgroundColor = 'gold'
        }





        // addEvenListener inside function

const makePink = document.getElementById('pink');

makePink.addEventListener('click', function optionalName(){
    document.body.style.backgroundColor = 'pink'
})








//addEvenListener too short

document.getElementById('gray').addEventListener('click', function makeGray(){
document.body.style.backgroundColor = 'gray'
})