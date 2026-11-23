const aprendiz = {
    nombre : "santiago",
    edad : 21,
    ficha : 3534466,
    jornada : "mixta",
    activo : true,

    saludar () {
        return`Hola, soy ${this.nombre} de la ficha ${this.ficha}`;
    }
}

console.log(aprendiz)
console.table(aprendiz)

console.log(aprendiz.ficha)
console.log(aprendiz["nombre"])

aprendiz.jornada = "noche"

console.table(aprendiz)
aprendiz.ciudad = "medellin"
console.table(aprendiz)

delete aprendiz.activo
console.table(aprendiz)

console.log(aprendiz.saludar())

const productos = [
    { codigo: "P01", nombre: "Cuaderno", precio: 4500, stock: 20 },
    { codigo: "P02", nombre: "Lápiz", precio: 1200, stock: 0 },
    { codigo: "P03", nombre: "Borrador", precio: 800, stock: 35 }
];

console.table(productos)
console.log(productos[0].nombre);
console.log(productos[2].precio);

/* Buscar una ficha */
let buscado = prompt("Código del producto:") ?? "";
let encontrado = null;

for (const p of productos){
    if (p.codigo === buscado.toUpperCase()){
        encontrado = p;
        break;
    }
}

if (encontrado) {
    console.log(`${encontrado.nombre}: $${encontrado.precio} - stock: ${encontrado.stock}`);
} else {
    console.log("No existe ese código");
}

let contador = 0
let suma = 0

for(const x of productos){
    if (x.stock === 0)
        contador++

    suma += (x.precio * x.stock)
}

console.log(`la cantidad de productos sin stock es ${contador}`)
console.log(`el total del inventario es ${suma}`)