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
    let nombreEditar = prompt("Ingrese el nombre de la materia que busca editar: ");
        
        let index = tareas.indexOf(nombreEditar);
        
        
        if (index !== -1) {
            
            let tareaNueva = prompt("Ingrese la tarea editada")
            tareas[index] = tareaNueva;
            console.log("Lista de tareas editada : "+ tareas);
        } else {
            console.log("El elemento especificado no se encuentra en la lista de tareas");
        }
    
}

function listaTarea() {
    for (let i = 0; i < tareas.length; i++)
        {
        console.log(i+ " " +tareas[i]);}

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
let cerrar = true
while (cerrar) {
    let opciones = parseInt(prompt("Ingrese una de las opciones \n 1 Agregar Tarea \n 2 Listar Tareas \n 3 Editar Tarea \n 4 Eliminar Tarea \n 5 Salir"));

    switch(opciones) {
        case 1:
            agregarTarea();
            break;
        case 2:
            listaTarea();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 5: 
        cerrar = false
        break;
        default:
            alert("Opción no válida");
    }
    
}