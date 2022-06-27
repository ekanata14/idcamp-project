/*

    For Loop

    You can make a looping with for statement. the syntax is for(let i = 0; i < example; i++){
        code to run;
    }

*/

let vehicleArray = ["Car", "Plane", "Ship"];

for(let i = 0; i < vehicleArray.length; i++){
    console.log("The vehicles are   " + vehicleArray[i]);
}

/*

    For..Of

    Also you can make a looping with for..loop statement. This if for loop for an array, And this is more simple and modern than using the usual for loop.

        the item    the variable
    for(arrayItem of myArray){
        code to run;
    }

*/

console.log("For of loop");

for(vehicle of vehicleArray){
    console.log("The vehicles are " + vehicle);
}