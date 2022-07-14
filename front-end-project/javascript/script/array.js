const arrayList = document.querySelector("#result");
const deleteLast = document.querySelector("#deleteLast");
const deleteEarly = document.querySelector("#deleteEarly");
const deleteXArray = document.querySelector("#deleteXArray");
const spliceArray = document.querySelector("#spliceArray");



const showArray = document.querySelector("#showArray");
let gpus = ["RTX", "GTX", "Radeon", "Titan", "RTX", "GTX", "Radeon", "Titan"];

let time = 1;
// let interval = setInterval(()=>{
//     if(time <= 10){
//         alert(time);
//         time++;
//     }
// }, 1000)

showArray.addEventListener('click', ()=>{
    for(let i = 0; i < gpus.length; i++){
        const list = document.createElement("li");
        setTimeout(()=>{
            if(time <= gpus.length){
                list.innerText = gpus[i];
                arrayList.appendChild(list);
                time++;
                
            }
            
            
        }, 200 * i);
    }
});

// deleteLast.addEventListener('click', ()=>{
//     for(let i = 0; i < gpus.length; i++){
//         const list = document.createElement("li");
//         gpus.pop();
//         list.innerText = gpus[i];
//         arrayList.appendChild(list);
//     }
// });

// deleteEarly.addEventListener('click', ()=>{
//     gpus.unshift();
//     list.innerText = gpus;
//     arrayList.appendChild(list);
// });
