const localStorageKey = "PRESS_FREQUENCY";

// Pengecekan apakah browser mendukung web storage
if(typeof(Storage) !== 'undefined'){
    // Jika item pada local storage belum ada maka beri nilai awal 0
    if(localStorage.getItem(localStorageKey) === null){
        localStorage.setItem(localStorageKey,0);
    }

    const incrementButton = document.querySelector("#increment");
    const resetButton = document.querySelector("#resetNumber");
    const numberDisplay = document.querySelector("#number");

    // Memberi nilai item pada local storage
    numberDisplay.innerText = localStorage.getItem(localStorageKey);

    incrementButton.addEventListener("click", function(){
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        numberDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    // Memberikan nilai 0 ke display number
    resetButton.addEventListener("click", function(){
        localStorage.removeItem(localStorageKey);
        numberDisplay.innerText = 0;
    });
} else{
    alert("Browser yang Anda gunakan tidak mendukung web storage");
}