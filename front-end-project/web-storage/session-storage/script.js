const sessionStorageKey = "PRESS_FREQUENCY";

// Pengecekan apakah browser mendukung web storage
if(typeof(Storage) !== 'undefined'){
    // Jika item pada local storage belum ada maka beri nilai awal 0
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey,0);
    }

    const incrementButton = document.querySelector("#increment");
    const resetButton = document.querySelector("#resetNumber");
    const numberDisplay = document.querySelector("#number");

    // Memberi nilai item pada session storage
    numberDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

    incrementButton.addEventListener("click", function(){
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        numberDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    // Memberikan nilai 0 ke display number
    resetButton.addEventListener("click", function(){
        sessionStorage.removeItem(sessionStorageKey);
        numberDisplay.innerText = 0;
    });
} else{
    alert("Browser yang Anda gunakan tidak mendukung web storage");
}