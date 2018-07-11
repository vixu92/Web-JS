function mediaArray(aDatos){

    var sumatorio = 0;

    for (let i = 0; i < aDatos.length; i++){

        sumatorio = sumatorio + aDatos[i];
        
    }
    return sumatorio / aDatos.length;
       
}

function mediaArg(){

    let sumatorio = 0;

    for (let i = 0; i < arguments.length; i++) {
        sumatorio = sumatorio + arguments[i]       
    }
    return sumatorio / arguments.length;
}

function mediaSpread(...aDatos){

    let sumatorio = 0;

    for (let i = 0; i < aDatos.length; i++) {
        sumatorio = sumatorio + aDatos[i]       
    }
    return sumatorio / arguments.length;

}

console.log(mediaArg(2,3,4,5));
console.log(mediaArray([2,3,4,5]));
console.log(mediaSpread(2,3,4,5));