let cuat1 = parseInt(prompt ("Ingrese la nota del primer cuatrimestre"));
let cuat2 = parseInt(prompt ("Ingrese la nota del segundo cuatrimestre"));
let cuat3 = parseInt(prompt ("Ingrese la nota del tercer cuatrimestre"));
let promedio
promedio = (cuat1+cuat2+cuat3)/3

if (promedio>=0 && promedio<=3){
    console.log("Nota Insuficiente")
}else if (promedio>=4 && promedio<=5){
    console.log("Nota Regular")
}else if (promedio>=6 && promedio<=7) {
    console.log("Nota Buena")
} else if (promedio>=8 && promedio<=9){
    console.log("Nota muy Buena") 
} else {
    console.log("Nota Sobresaliente " )
}
