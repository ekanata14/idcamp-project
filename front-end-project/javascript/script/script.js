function welcome(){
    alert("Hello User");
}

console.log("Congratulations, you have reached this point");

/* Javascript Data Types and variable
    Javascript variable can be declared with let or const.If you want the data be changeable, use let, if you want the fixed data, use const. You can declare javascript variable with this syntax

let const variableName = 1/"Hello"/'hello'/true/false/null
*/

/* Undefined
    If you declare a variable but you don't give a value on that, the data will have undefined type
*/   

    let example;
    console.log(typeof(example));
/* Numbers
    If you want to make a variable with the value number, just give the value a number
*/
    let numVar = 1;
    console.log(numVar);    

    /*
     You can do calculation on number data type. These are the types of operator that can do calculation with it.

     - Plus = +
     - Minus = -
     - Divide = /
     - Times = *
     - Modules = %
*/

    let numVar_2 = 8;
    console.log(numVar + numVar_2);
    console.log(numVar - numVar_2);
    console.log(numVar / numVar_2);
    console.log(numVar * numVar_2);
    console.log(numVar % numVar_2);

/*
    Strings

    This is the text data type, you can type any text within single 'text' or double quotes "text"
*/

    let stringVar = "Hello, Welcome to Bali";
    console.log(stringVar);

/*
    Boolean

    You can make boolean data type by write true or false statement or thiw will be working the when it's on conditioning
*/

    let x = true;
    let y = false;
    console.log(typeof(x));
    console.log(typeof(y));

    console.log(5 < 10);
    console.log(5 > 10);

/*
    Null

    If you want to make a variable but don't know yet what will be the value, you can use null data type, it's same as undefined data type, but it'll be filled with nothing in the variable instead of don't give the value on the variable.
*/

    let nullVar = null;
    console.log(nullVar);
