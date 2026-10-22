/* pesos a dolares */
function pesosadolares(){
    let pesos = Number(prompt("cuantos pesos tiene"))
    let dolares = Number(prompt("ingrese el valor del dolar al dia  de hoy"))
    return ` la conversion de ${pesos} pesos a dolares es ${pesos / dolares} dolares`
}

function temperatura(){
    let c = Number(prompt("Digite cuantos grados hay"))
    return `Los grados ${c} centigrados son en ${c * 9 / 5 + 32} farenheight `
}

function kmamll(){
    let km = Number(prompt("Digite la cantiidad de kilometros"))
    return `${km} kilometros, son ${km * 0.621371} millas`
}

function segundosahora(){
    let segundos = Number(prompt("digite la cantidad de segundos"))
    return `${segundos} segundos son ${segundos/3600} horas`
}

function litrosagalones(){
    let litros = Number(prompt("Digite la cantidad de litros que quiere convertir a galones"))
    return `${litros} litros, corresponden a ${litros * 0.264172}`
}

let opcion = (prompt("Menu: \n1. pesos  a dolares \n2. celsious a farenheigth \n3.km a millas \n4. segundos a horas  \n5. Litros a galones \n0.salir"))
while (opcion != 0){
    switch(opcion){
        case "1":
            console.log(pesosadolares())
            break
        case "2":
            console.log(temperatura())
            break
        case "3":
            console.log(kmamll())
            break
        case "4":
            console.log(segundosahora())
            break
        case "5":
            console.log(litrosagalones())
            break
        default:
            alert("debes elegir una opcion de 0 a 4")
            console.log("debes elegir una opción entre 0 y 4")
            break
    }
    opcion = (prompt("Menu: \n1. pesos  a dolares \n2. celsious a farenheigth \n3.km a millas \n4. segundos a horas  \n0.salir"))
}