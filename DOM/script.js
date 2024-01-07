function humanDensity(areNumber){
    const humanForFirst10Miles = 500;
    const humanForFirst20Miles = 700;
    const humanForFirst60Miles = 900;
    if(areNumber <= 10){
        const densityHuman = areNumber * humanForFirst10Miles;
        return densityHuman;
    }
    else if( areNumber <= 20){
        const first10miles = 10 * humanForFirst10Miles;
        const restMiles = areNumber - 10;
        const restDensity = restMiles * humanForFirst20Miles;
        const totalDensity = first10miles + restDensity;
        return totalDensity;
    }
    else{
        const first10miles = 10 * humanForFirst10Miles;
        const second10Miles = 10 * humanForFirst20Miles;
        const restMiles = areNumber - 20;
        const restMilesDensity = restMiles * humanForFirst60Miles;
        const totalDensity = first10miles + second10Miles + restMilesDensity;
        return totalDensity;
    }
}
let area = humanDensity(21);
console.log(area);