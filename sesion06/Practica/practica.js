// /* Arreglo ttren */
// let tren =["ana", "sofia", "ricardo", "rosalva","edison"]

// /* saber la  cantidad de elementos */
// console.log(tren.length)
// console.log(tren)
// console.log(tren[2])
// console.log(tren[tren.length - 1])

// tren.push("Boris")
// console.log(tren)

// tren.unshift("pedro")
// console.log(tren)

// tren.pop()
// console.log(tren)

// console.log(tren.includes("sofia"))
// console.log(tren.indexOf("ricardo"))
// //console.log(tren.splice(3, -1))
// for(let x = tren.length-1; x >= 3; x--)
// {
//     console.log([x])
//     console.log(tren[x])
// }

// let nombre = "rosalva"
// for(let x of nombre){
//     console.log(x)
// }

// let nombrearreglo = []
// for(let n of nombre){
//     console.log(n)
//     nombrearreglo.push(n)
// }

// console.log(nombrearreglo.join("-"))
// console.log(tren.join("|"))

// for(let x = 0; x < tren.length; x++){
//     console.log(`${x + 1}. ${tren[x]}`)
// }

// for(const pasajero of  tren){
//     console.log(pasajero)
// }

// console.table(tren)


const compras = []
let compra
do{
    compra = prompt("ingrese un producto \nsalir")
    compras.push(compra)
}while (compra != "")
compras.pop()
console.table(compras)
for(let x = 0; x < compras.length; x++){
    console.log(`${x+1} . ${compras[x]}`)
}

let quitarproducto = prompt("que producto desea eliminar de la lista?")
let posicion = -1
posicion = compras.indexOf(quitarproducto)
console.log(posicion)
compras.splice(posicion, 1)
console.table(compras)
if (posicion == -1)
    console.log("no se elimino nada")
else
    console.log(`producto "${quitarproducto}" se elimino correctamente de su lista`)