function minimal(a,b){
    if(a < b){
        return a;
    } else if(b < a){
        return b;
    } else {
        return a;
    }
}

minimal(1,4);
minimal(3,2);
minimal(3,3);

function power(a,b){
    // let result = 1;
    // if(b < 1){
    //     result = a * b;
    // } else{
    //     for(let i = 0; i < b; i++){
    //         result *= a;
    //     }
    // }
    // return result;

    return a ** b;
}

power(7,3);
power(3,3);
power(4, 0.5);