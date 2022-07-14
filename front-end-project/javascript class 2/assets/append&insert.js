const newElement = document.createElement("li");
newElement.innerText = "Selamat Menikmati";
const daftar = document.querySelector("ol");
const elemenAwal = document.createElement("li");
const itemAwal = document.getElementById("awal");
elemenAwal.innerText = "Hidupkan kompor";


daftar.appendChild(newElement);
daftar.insertBefore(elemenAwal, itemAwal);
// daftar.insertBefore(elemenAwal, document.getElementById("awal"));