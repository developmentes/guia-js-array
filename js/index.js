import promedio from "./modules/promedio.js";

let caja = document.getElementById("caja");
window.cargaNotas = promedio.cargaNotas;


document.getElementById("e4").addEventListener("click", () => {
    
    caja.innerHTML = promedio.data;

    promedio.cargaNotas();


});