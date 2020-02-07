import React, { Component } from 'react'
export default class UserList extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>
                        Usuarios
                    </h1>
                </div>
                <div className="contenedor-tabla m-4">
                    <table className="table table-hover table-dark">
                        <thead>
                        <tr>
                                <th scope="col">#</th>
                                <th scope="col">nombre</th>
                                <th scope="col">apellido</th>
                                <th scope="col">telefono</th>
                                <th scope="col">email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>enzo</td>
                                <td>politti</td>
                                <td>381-1223133</td>
                                <td>enzopilitti@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>lucas</td>
                                <td>salvatierra</td>
                                <td>381-23445433</td>
                                <td>lucassalvatierra@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>leo</td>
                                <td>moyano</td>
                                <td>381-56697980</td>
                                <td>leomoyano@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>lediegue</td>
                                <td>rolling</td>
                                <td>381-22345644</td>
                                <td>ledieguerolling@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}








// const listaUsuario  = [{ 
//     cliente: "karinga",
//     Cuotas: "3 x 2500",
    
//     vendedor: "Lucas",
//     publicada:false
// }, {
//     cliente: "Le Diegue",
//     Cuotas: "5 x 4000",
    
//     vendedor: "Lucas",
//     publicada: false
// }, {
//     cliente: "Lucas",
//     Cuotas: "3 x 2500",
  
//     vendedor: "Lucas",
//     publicada:true
// }, {
//     cliente: "Bianca",
//     Cuotas: "5 x 4000",
    
//     vendedor: "Lucas",
//     publicada: true
// }, {
//     cliente: "Benjamin",
//     Cuotas: "3 x 2500",
    
//     vendedor: "Lucas",
//     publicada: false
// }];
// let tabla = document.getElementById("cuerpoTabla");
// listaUsuario.forEach(mostrarFila);
// function mostrarFila(item, index) {
//     let claseBG = "bg-dange";
//     let textoBtn = "Publicar"
//     if(item.publicada == true) {
//         claseBG = "bg-success";
//         textoBtn = "No Publicar"
//     }
//     tabla.innerHTML += `<tr class="${claseBG}"> 
//     <th scope="row">${index + 1}</th>
//     <td>${item.cliente}</td>
//     <td>${item.Cuotas}</td>
//     <td>${item.vendedor}</td>
//     <td>
//         <div class="btn-group" role="group" aria-label="Basic example">
//             <button type="button" class="btn btn-secondary" onclick="cambiarEstado(${index})">${textoBtn}</button>
//             <button type="button" class="btn btn-secondary" onclick="eliminar(${index})" btn-danger">Borrar</button>
//         </div>
//     </td>
//     </tr>`;
// }
// function cambiarEstado(index){
//     listaUsuario [index].publicada = !listaUsuario[index].publicada;
//     tabla.innerHTML = ""; 
//     listaUsuario.forEach(mostrarFila);
// }
// function eliminar(index){
//     listaUsuario.splice(index, 1);
//     tabla.innerHTML = "";
//     listaUsuario.forEach(mostrarFila);
// }
// function guardar(){
//     let nuevo = {
//         cliente: document.getElementById("cliente").value,
//         Cuotas: document.getElementById("cuotas").value,
//         vendedor: document.getElementById("vendedor").value,
//         publicada: false
//     }  
//     listaUsuario.push(nuevo);
//     tabla.innerHTML = "";
//     listaUsuario.forEach(mostrarFila);
//     document.getElementById("cliente").value =  "";
//     document.getElementById("cuotas").value =  "";
//     document.getElementById("vendedor").value =  "";
// }

