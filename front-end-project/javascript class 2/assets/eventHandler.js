const contents = document.querySelector(".contents");
const counter = document.querySelector("#count");
const counterButton = document.querySelector("#incrementButton");

function welcome(){
    alert("Show them up");
    contents.removeAttribute('hidden');
}

// document.body.onload = welcome;
window.addEventListener("load", welcome());

function increment(){
    counter.innerText++;

    if(counter.innerText == "7"){
        const newHeading = document.createElement("h4");
        newHeading.innerText = "You found a gift";
        const newImage = document.createElement("img");
        newImage.setAttribute("src", "assets/images/Vr_illustration 1.png");
        contents.appendChild(newHeading).appendChild(newImage);
    }

}

// counterButton.onclick = increment;
counterButton.addEventListener("click", increment());