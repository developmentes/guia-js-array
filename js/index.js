import promedio from "./modules/promedio.js";

let caja = document.getElementById("caja");
window.cargaNotas = promedio.cargaNotas;
window.calcular   = promedio.calcular.bind(promedio);

document.getElementById("e4").addEventListener("click", () => {
    
    caja.innerHTML = promedio.data;

    promedio.cargaNotas();


});