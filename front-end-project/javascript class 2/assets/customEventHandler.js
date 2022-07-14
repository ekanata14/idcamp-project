// Custom Event Variable
const changeCaption = new Event('changeCaption');

// on page load addEventListener
window.addEventListener('load', function(){
    const button = document.getElementById('tombol');
    button.addEventListener('changeCaption', customEventHandler);
    button.addEventListener('click', function(){
        tombol.dispatchEvent(changeCaption);
    }); 
});

function customEventHandler(ev){
    console.log("Event " + ev.type + "telah dijalankan");
    const caption = document.getElementById("caption");
    caption.innerText = "Anda telah membangkitkan custom event";
}
