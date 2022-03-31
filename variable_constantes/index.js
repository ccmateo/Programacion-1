//funcion clasica
function mostrar(){
    //declaramos la variable
    let numero = 15;
    //se imprime en la consola del navegador
    console.log(numero)
}
function evaluar() {
    let dato = 22;
//condicion 
    if(dato > 10){
        let dato =  77
        console.log(dato)
    }
    console.log(dato)
}
function validar() {
    const valor = prompt("Ingrese calificacion");
    //forma 1
    /*if(valor >= 7){
        alert ('estas aprobado')
    }else{
        alert ('no estas aprobado, estupido')
    }
    */
    (valor >=7) ? alert('aprobado') : alert ('a casa pt')
}
//invocamos la funcion validar
//validar()
function calcular() {
//forma 1
const dato = document.getElementById("imp_dato1").value

//forma 2
//const dato = document.querySelector("#inp_dato1").value
const resultado = dato * 10;

alert (resultado)
}
function triangulo(){
    const area1 = document.querySelector("#inp_base").value
    
    const area2 = document.querySelector("#inp_altura").value

    const resultado = area1 * area2 / 2

    alert (resultado)
}
