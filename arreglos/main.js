
let facturas = ['Cara sucia','media luna', 'coñoncito de dulce de leche','Churros','Dulce de leche' ]

//como saber la cantidad de elementos de un arreglo
//es la cantidad de elementos
    const longitud = facturas.length
    console.log ('Longitud del arreglo facturas: ' + longitud)

//como accede a un elemento del array atraves de su indice
    const primero = facturas[0]
    console.log ('El primer elemento es:  ' + primero)

//como acceder al ultimo elemento de un arreglo
    const ultimo = facturas[longitud-1]
    console.log ('el ultimo elemento es: '+ ultimo)

//como recorrer un array haciendo uso de forreach
    facturas.forEach( (element,index) => {
        console.log (index+' º^º '+element)
    })

//como agregar un nuevo elemento ak final de un arreglo
    facturas.push('Donas')
    console.log(facturas)

//como eliminamos el ultimo elemento de un array(DONAS)
    facturas.pop()
    console.log(facturas)

//como agregar un elemento al inicio de un arreglo(donas la venganza)
    facturas.unshift('Donas')
    console.log(facturas)

//como eliminar el primer elemento de un arreglo(ADIOS DONAS)
    facturas.shift()
    console.log(facturas)

//como obtener el indice de un elemento
    const indice = facturas.indexOf('coñoncito de dulce de leche')
    console.log('el indice del coñoncito es: ' + indice)

//como eliminar un elemento del arreglo haciendo uso de su indice
    facturas.splice(indice,1)
    console.log(facturas)

//como eliminar mas de un elemento de un arreglo
    const indice_ml = facturas.indexOf('media luna')
    const eliminados = facturas.splice(indice_ml,3)// no solo elimina elemento sino tambien nos informa de estos
    console.log ('Los eliminados son'+ eliminados)
    console.log(facturas)

//como generar una copia de un arreglo (resurreccion de donas)
    const copiafacturas = facturas.slice()
    copiafacturas.push('Donas','cañoncito de dulce de leche','churros')
    console.log('copia con extras: ' + copiafacturas)
    console.log('original: ' + facturas)

//como agregar elementos en el medio de un array
    copiafacturas.splice(2,0,'Biscochito')
    console.log(copiafacturas)