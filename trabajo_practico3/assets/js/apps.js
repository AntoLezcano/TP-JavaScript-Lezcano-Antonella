let tareas = [];

function agregarTarea(){
    let regex =/^[a-zA-Z\s]+$/;
    let tareaNueva = prompt("ingrese el nombre de la tarea que desea agregar");
    if (tareaNueva !== null && tareaNueva.trim !== "" && regex.test(tareaNueva.trim())){
    tareas.push(tareaNueva.trim().toLowerCase());
    alert("Se agrego: \n" + tareaNueva.toLowerCase());
    } else{
    alert("La tarea ingresada no es valida");
    }
}

function editarTarea() {
    if (tareas.length) {
        let opcion = parseInt(prompt("Ingrese el número de la tarea que desea editar (1 al " + tareas.length + "): ")) - 1;
        if (opcion >= 0 && opcion < tareas.length) {
            tareas[opcion] = prompt("Ingrese la nueva descripción de la tarea:");
            alert("El listado de tareas quedo: \n" + tareas.join("\n"));
        } else if (opcion > tareas.length ) {
            alert("Índice no válido");
        } else {
        alert("No hay tareas para editar");
    }
}
}
function editarTarea() {
    let modificar = tareas.in

}

function eliminarTarea(){
    for (let i = 0; i < tareas.length; i++){
    console.log(i+ " " +tareas[i]);
}
let opc = parseInt(prompt("Seleccione el numero de la tarea que desea eliminar"));
if(opc >= 0 && opc < tareas.length){
tareas.splice(opc)
alert("La tarea fue eliminada \n "+ "la lista de tareas quedo de la siguiente manera: "+ tareas.join("\n"))
} else if(opc < 0 || opc > tareas.length){ 

    alert("Índice no válido");
}else if (tareas == 0){
    alert("No hay tareas para eliminar");
}
}

