export default {
  promedios: [
    { ramo: "Matematicas", promedio: 3.5, estado: "Reprobado" },
    { ramo: "Ciencias", promedio: 7.0, estado: "Aprobado" },
  ],

  data: `
  <h1>Mis Promedios</h1>
  <p>Asignatura</p>
  <input id="txt1" type="text" />
  
  <p>nota 1</p>
  <input id="txtn1" type="number" />
  <p>% N° 1</p>
  <input id="txtp1" type="number" />

  <p>nota 2</p>
  <input id="txtn2" type="number" />
  <p>% N° 1</p>
  <input id="txtp2" type="number" />

  <p>nota 3</p>
  <input id="txtn3" type="number" />
  <p>% N° 1</p>
  <input id="txtp3" type="number" />

  <button onclick = "calcular()">Calcular</button>

  <div id="salida">salida</div>
  `,

  calcular: function () {
    let txt_asignatura = document.getElementById("txt1");
    let txtn1 = document.getElementById("txtn1");
    let txtp1 = document.getElementById("txtp1");
    let txtn2 = document.getElementById("txtn2");
    let txtp2 = document.getElementById("txtp2");
    let txtn3 = document.getElementById("txtn3");
    let txtp3 = document.getElementById("txtp3");

    if (txt_asignatura.value == "" || txtn1.value == "") {
      alert("complete el campo vacio");

      return;
    }
    if (txtn1.value < 1 || txtn1.value > 7) {
      alert("la nota 1 ingresada debe ser entre 1 y 7");
      txtn1.value = "";
      txtn1.focus();
      return;
    }
    if (txtn2.value < 1 || txtn2.value > 7) {
      alert("la nota 2 ingresada debe ser entre 1 y 7");
      txtn2.value = "";
      txtn2.focus();
      return;
    }
    if (txtn3.value < 1 || txtn3.value > 7) {
      alert("la nota 2 ingresada debe ser entre 1 y 7");
      txtn3.value = "";
      txtn3.focus();
      return;
    }

    //validacion de porcentajes
    if (txtp1.value < 1 || txtp1.value > 100) {
      alert("el porcentaje de la nota 1  debe ser entre 1 y 100");
      txtp1.value = "";
      txtp1.focus();
      return;
    }
    if (txtp2.value < 1 || txtp2.value > 100) {
      alert("el porcentaje de la nota 2  debe ser entre 1 y 100");
      txtp2.value = "";
      txtp2.focus();
      return;
    }
    if (txtp3.value < 1 || txtp3.value > 100) {
      alert("el porcentaje de la nota 3  debe ser entre 1 y 100");
      txtp3.value = "";
      txtp3.focus();
      return;
    }

    let suma = parseInt(txtp1.value) + parseInt(txtp2.value)  + parseInt( txtp3.value);

    if (suma != 100) {
      alert("la suma de los porcentajes no completa el 100%");
    }

    let prom =
      (txtn1.value * txtp1.value) / 100 + (txtn2.value * txtp2.value) / 100 + (txtn3.value * txtp3.value) / 100;

    var obj = {
      ramo: txt_asignatura.value,
      promedio: prom.toFixed(1),
      estado: prom >= 4 ? "Aprobado" : "Reprobado",
    };
    this.promedios.push(obj);
    this.cargaNotas();
  },

  cargaNotas: function () {
    let salida = document.getElementById("salida");

    let tabla = `
        <table border="1" width="400">
            <tr>
                <th>Asignatura</th>
                <th>promedio</th>
                <th>Estado</th>

            </tr>

        `;

    this.promedios.forEach((item) => {
      /* esta es una forma clasica de validar con if else pero ocuparemos la de abajo llamada operadores ternarios
            
                        // let color = "nota_roja";
                        // if(item.promedio >= 4){
                        //     color = "nota_azul"
                        // }else{
                        //     color =" nota_roja";
                        // }
            
            */
      tabla += `
         <tr class = "${item.promedio >= 4 ? "nota_azul" : "nota_roja"}">  
                <td>${item.ramo}</td>
                <td>${item.promedio}</td>
                <td>${item.estado}</td>
            </tr>
            
            
            
            `;
    });

    tabla += "</table>";

    salida.innerHTML = tabla;
  },
};
