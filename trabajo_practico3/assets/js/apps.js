let tareas = [];

function agregarTarea(){
    let regex =/^[a-zA-Z\s]+$/;
    let tareaNueva = prompt("ingrese el nombre de la tarea que desea agregar");
    if (tareaNueva !== null && tareaNueva.trim !== "" && regex.test(tareaNueva.trim())){
    tareas.push(tareaNueva.trim());
    alert("Se agrego: \n" + tareaNueva);
    } else{
    alert("La tarea ingresada no es valida");
    }
}

function listaTarea(){
    if (tareas == 0){
        alert("no hay tareas");
    }else{
        alert(tareas.join(", " ))
    }
}

listaTarea(tareas)