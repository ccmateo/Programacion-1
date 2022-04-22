function calcular_raices(datoa,datob,datoc){
    const r = Math.pow(datob,2)-(4*datoa*datoc)    
    const x1 = (-datob) + (Math.sqrt(r) / 2 * datoa)
    const x2 = (-datob) - (Math.sqrt(r) / 2 * datoa)
    return x1+ "   -    " +x2
}

function mostrar() {

    const datoa = document.getElementById("inp_datoa").value
    const datob = document.getElementById("inp_datob").value
    const datoc = document.getElementById("inp_datoc").value

    const respuesta = calcular_raices(datoa,datob,datoc)
    
    alert (respuesta)
}