const catalogo = [
    {codigo: "P01", nombre: "Teclado", categoria: "Tecnologia", precio: 50000, stock: 10},
    {codigo: "P02", nombre: "Mouse", categoria: "Tecnologia", precio: 30000, stock: 15},
    {codigo: "P03", nombre: "Monitor", categoria: "Tecnologia", precio: 450000, stock: 5},
    {codigo: "P04", nombre: "Audifonos", categoria: "Accesorios", precio: 80000, stock: 0},
    {codigo: "P05", nombre: "USB", categoria: "Accesorios", precio: 25000, stock: 20}
];

function buscarporcodigo(codigo) {
    for (let producto of catalogo) {
        if (producto.codigo == codigo) {
            return producto;
        }
    }
    return null;
}

function contar_agotados() {

    let agotados = 0;
    for (let producto of catalogo) {
        if (producto.stock == 0) {
            agotados++;
        }
    }
    return agotados;
}

function valor_inventario() {
    let total = 0;
    for (let producto of catalogo) {
        total = total + producto.precio * producto.stock;
    }
    return total;
}

let opcion;

do {
    opcion = prompt("1. Ver catalogo\n2. Buscar producto\n3. Agotados\n4. Valor inventario\n0. Salir");
    switch (opcion) {
        case "1":
            console.table(catalogo);
            break;

        case "2":
            let codigo = prompt("Codigo del producto:");
            let producto = buscarporcodigo(codigo);
            if (producto != null) {
                console.log(producto);
            } else {
                alert("Producto no existe");
            }
            break;

        case "3":
            alert("Productos agotados: " + contar_agotados());
            break;

        case "4":
            alert("Valor inventario: $" + valor_inventario());
            break;
    }

} while (opcion != "0");