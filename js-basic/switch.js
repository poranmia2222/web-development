var color = 'green';
if(color == 'white'){
    console.log('this is white color')
}
else if(color == 'yellow'){
    console.log('this color is yellow')
}
else if(color == 'red'){
    console.log('this is red color');
}
else if(color == 'green'){
    console.log('this is a green color')
}
else if(color == 'blue'){
    console.log('this is a blue color')
}
else{
    console.log('this color in not founded')
}





switch(color){
    case'red':
        console.log('this color is red')
    break;
    case 'yellow':
        console.log('this is a yellow color')
    break;
    case'green':
        console.log("this is a green color code");
    break;
    case'blue':
        console.log('this is a blue color');
    break;
    default:
        console.log('this is no color code')
}