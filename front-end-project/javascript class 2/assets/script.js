const gambar = document.getElementById("gambar");
const buttons = document.getElementsByClassName('button');
const playButton = buttons[3];
const button = playButton.children[0];
const dicodingLink = document.getElementById("dicodingLink");
const googleLink = document.getElementById("googleLink");

for(buttonItem of buttons){
    buttonItem.children[0].style.borderRadius = "6px";
}


dicodingLink.innerText = "Belajar Programming di Dicoding";
googleLink.innerHTML = "<i>Mencari sesuatu di Google<i>";

gambar.setAttribute("width", "300");
gambar.setAttribute("height", "215");


