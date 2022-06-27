"use strict";

/*
    Function

    Function is a block of statement that can contain variable, for loop, conditional statement and the other statement.
*/

// Usual Function
function greeting(){
    console.log("Hello, Good Afternoon");
}

greeting();

// Function With Argument
function fancyThing(vehicle, level){
    if(vehicle == "car" && level == "fancy"){
        console.log("Bugatti");
    }else if(vehicle == "motorcycle" && level == "fancy"){
        console.log("R1");
    } else if(vehicle == "bicycle" && level == "fancy"){
        console.log("Pinarello");
    } else{
        console.log("There is no choice on the menu");
    }
}

fancyThing("motorcycle", "fancy");

// Return Function

function fancyThing_2(vehicle, level){
    if(vehicle == "car" && level == "fancy"){
        return("Bugatti");
    }else if(vehicle == "motorcycle" && level == "fancy"){
        return("R1");
    } else if(vehicle == "bicycle" && level == "fancy"){
        return("Pinarello");
    } else{
        return("There is no choice on the menu");
    }
}

console.log(fancyThing_2("car", "fancy"));

