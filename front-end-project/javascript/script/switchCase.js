let foodType = document.querySelector("#inputType");
const display = document.createElement("h1");
const choiceButton = document.querySelector("#choice");

choiceButton.addEventListener('click',()=>{
    switch(foodType.value){
        case "Goreng":
            display.innerText = "Ayam Goreng";
            break;
        case "Rebus":
            display.innerText = "Sup Ayam";
            break;
        case "Bakar":
            display.innerText = "Ayam Bakar";
            break;
        default:
            display.innerText = "Tipe Masakan belum dipilih";
    }
    document.body.appendChild(display);
});


if(score >= 90){
    result = "Selamat! Anda mendapatkan nilai A";
} else if(score >= 80 && score <= 89){
    result = "Anda mendapatkan nilai B";
} else if(score >= 70 && score <= 79){
    result = "Anda mendapatkan nilai C";
} else if(score >= 60 && score <= 69){
    result = "Anda mendapatkan nilai D";
} else{
    result = "Anda mendapatkan nilai E"
}

const restaurant = {
    name : "DreamerFood",
    city : "Denpasar",
    'favorite drink' : "Hot Orange",
    'favorite food' : "Grilled Chicken",
    isVegan : false
}

let name = restaurant.name;
let favoriteDrink = restaurant['favorite drink'];
