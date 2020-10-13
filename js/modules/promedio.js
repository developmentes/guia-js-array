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
  <input id="txtn1" type="text" />
  <p>% N° 1</p>
  <input id="txtp1" type="text" />

  <p>nota 2</p>
  <input id="txtn2" type="text" />
  <p>% N° 1</p>
  <input id="txtp2" type="text" />

  <p>nota 3</p>
  <input id="txtn3" type="text" />
  <p>% N° 1</p>
  <input id="txtp3" type="text" />

  <button>Calcular</button>

  <div id="salida">salida</div>
  `,

    cargaNotas: function(){
        let salida = document.getElementById("salida");

        let tabla = `
        <table border="1" width="400">
            <tr>
                <th>Asignatura</th>
                <th>promedio</th>
                <th>Estado</th>

            </tr>

        `;

        this.promedios.forEach(item =>{
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
                <td>${item. promedio}</td>
                <td>${item.estado}</td>
            </tr>
            
            
            
            `;
        

        });

        tabla +="</table>"

        salida.innerHTML = tabla;


    },



  };