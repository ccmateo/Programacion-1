function calcular_area(){
    const base1 = document.querySelector("#inp_base1").value

    const base2 = document.querySelector("#inp_base2").value

    const altura = document.querySelector("#inp_altura").value

    const resultado = ((parseInt(base1)+parseInt(base2))*altura)/2

    alert (resultado) 

}