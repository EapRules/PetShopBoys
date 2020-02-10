const listaUsuario = [{
    cliente: "karinga",
    Cuotas: "3 x 2500",

    vendedor: "Lucas",
    publicada: false
}, {
    cliente: "Le Diegue",
    Cuotas: "5 x 4000",

    vendedor: "Lucas",
    publicada: false
}, {
    cliente: "Lucas",
    Cuotas: "3 x 2500",

    vendedor: "Lucas",
    publicada: true
}, {
    cliente: "Bianca",
    Cuotas: "5 x 4000",

    vendedor: "Lucas",
    publicada: true
}, {
    cliente: "Benjamin",
    Cuotas: "3 x 2500",

    vendedor: "Lucas",
    publicada: false
}];
let tabla = document.getElementById("cuerpoTabla");
listaUsuario.forEach(mostrarFila);
function mostrarFila(item, index) {
    let claseBG = "bg-dange";
    let textoBtn = "Publicar"
    if (item.publicada == true) {
        claseBG = "bg-success";
        textoBtn = "No Publicar"
    }
    tabla.innerHTML += `<tr className="${claseBG}"> 
    <th scope="row">${index + 1}</th>
    <td>${item.cliente}</td>
    <td>${item.Cuotas}</td>
    <td>${item.vendedor}</td>
    <td>
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onclick="cambiarEstado(${index})">${textoBtn}</button>
            <button type="button" className="btn btn-secondary" onclick="eliminar(${index})" btn-danger">Borrar</button>
        </div>
    </td>
    </tr>`;
}
function cambiarEstado(index) {
    listaUsuario[index].publicada = !listaUsuario[index].publicada;
    tabla.innerHTML = "";
    listaUsuario.forEach(mostrarFila);
}
function eliminar(index) {
    listaUsuario.splice(index, 1);
    tabla.innerHTML = "";
    listaUsuario.forEach(mostrarFila);
}
function guardar() {
    let nuevo = {
        cliente: document.getElementById("cliente").value,
        Cuotas: document.getElementById("cuotas").value,
        vendedor: document.getElementById("vendedor").value,
        publicada: false
    }
    listaUsuario.push(nuevo);
    tabla.innerHTML = "";
    listaUsuario.forEach(mostrarFila);
    document.getElementById("cliente").value = "";
    document.getElementById("cuotas").value = "";
    document.getElementById("vendedor").value = "";
}

