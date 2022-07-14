document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
    
    const inputNama = document.getElementById("inputNama");
    const sisaKarakterDisplay = document.getElementById("sisaKarakter");
    const notifSisaKarakter = document.getElementById("notifikasiSisaKarakter");
    const form = document.getElementById("formDataDiri");
    const inputCapcha = document.getElementById("inputCaptcha");
    const submitButtonStatus = document.getElementById('submitButton');
    const onCopy = document.getElementById("inputCopy");
    const onPaste = document.getElementById("inputPaste");

    inputNama.addEventListener('input', function(){
        const jumlahKarakterDiketik = inputNama.value.length;
        const jumlahKarakterMaksimal = inputNama.maxLength;
    
        console.log("Jumlah karakter diketik: ", jumlahKarakterDiketik);
        console.log("jumlah Karakter Maksimal: ", jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        sisaKarakterDisplay.innerText = sisaKarakterUpdate.toString();
    
        if(sisaKarakterUpdate === 0){
            sisaKarakterDisplay.innerText = "Batas Maksimal Tercapai";
        } else if(sisaKarakterUpdate <= 5){
            notifSisaKarakter.style.color = "red";
        } else{
            notifSisaKarakter.style.color = "black";
        }

    });

    inputNama.addEventListener('focus', function(){
        console.log('inputNama: focus');
        notifSisaKarakter.style.visibility = 'visible';
    });

    // Blur when the name input doesn't focus again
    inputNama.addEventListener("blur", function(){
        console.log('inputNama: blur');
        notifSisaKarakter.style.visibility = 'hidden';
    });

    // input Captcha event
    inputCaptcha.addEventListener('change', function(){
        console.log('inputCaptcha: change');


        if(inputCapcha.value === "PRNU"){
            submitButtonStatus.removeAttribute("disabled")
        } else{
            submitButtonStatus.setAttribute("disabled", "");
        } 
    });

    form.addEventListener('submit', function(){
        if(inputCaptcha.value === "PRNU"){
            alert("Selamat! Captcha Anda lolos");
        } else {
            alert("Captcha Anda belum tepat");
            submitButtonStatus.setAttribute("disabled", "");
        }
        event.preventDefault();
    });

    onCopy.addEventListener('copy', function(){
        alert("Anda telah menyalin tulisan ini");
    });

    onPaste.addEventListener('paste', function(){
        alert("Anda telah menempel tulisan ini");
    });
});


