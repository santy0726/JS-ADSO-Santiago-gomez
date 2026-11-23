const productos = [
    { codigo: "P01", nombre: "Cuaderno", categoria : "utiles", precio: 4500, stock: 20 },
    { codigo: "P02", nombre: "Lápiz",categoria : "utiles", precio: 1200, stock: 0 },
    { codigo: "P03", nombre: "Borrador",categoria : "utiles", precio: 800, stock: 35 },
    { codigo: "P04", nombre: "lapicero",categoria : "utiles", precio: 2000, stock: 0 },
    { codigo: "P05", nombre: "peluche", categoria : "miselania", precio: 5800, stock: 3 }
];

/* Buscar por codigo */
function buscarporcodigo(codigo){
    for (const p of productos){
        if (p.codigo === buscado.toUpperCase()){
            encontrado = p;
            break;
        }
    }

    if (encontrado) 
        console.log(`${encontrado.nombre}: $${encontrado.precio} - stock: ${encontrado.stock}`);
    else 
    console.log("No existe ese código");
}


let buscado = prompt("Código del producto:") ?? "";
let encontrado = null;


if (encontrado) {
    console.log(`${encontrado.nombre}: $${encontrado.precio} - stock: ${encontrado.stock}`);
} else {
    console.log("No existe ese código");
}

/* contar agotados */
function contaragotados(){
    let contador = 0;
    for(const x of productos){
    if (x.stock === 0){
        contador++
        console.log(`Producto  agotado ${x.nombre}`)
    }
}
console.log(`la cantidad de productos sin stock es ${contador}`)
}

/* Valor Inventario */
function valorinventario(){
    let suma = 0
    for(const x of productos){
        suma += (x.precio * x.stock)
    }
console.log(`El total del inventario es ${suma}`)
}

/* console.log(buscarporcodigo()) */
/* console.log(contaragotados()) */

/* function menu() {
    let opcion; 
    do{
    opcion = (prompt("Menu: \n1 Ver catálogo  \n2 Buscar por código \n3 Agotados  \n4 Valor del inventario \n0 Salir "))

    }
} */
