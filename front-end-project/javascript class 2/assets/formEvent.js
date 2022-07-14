const submitAction = document.getElementById("formDataDiri");
const messageDisplay = document.getElementById("messageAfterSubmit");

submitAction.addEventListener("submit",function(event){
    const inputNama = document.getElementById("inputNama").value;
    const inputDomisili = document.getElementById("inputDomisili").value;
    const displayMessage = "Halo " + inputNama + ", Bagaimana situasi di " + inputDomisili + "? ";

    messageDisplay.innerText = displayMessage;
    event.preventDefault();
});