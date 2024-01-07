for(let i = 1; i<= 100; i++){
    if(i%3 == 0 && i%5 ==0){
        console.log("divide by both");
    }
    else if(i%3==0){
        console.log("this number devide by 3");
    }
    else if(i%5==0){
        console.log("this number devide by 5");
    }
    else{
        console.log(i);
    }
}