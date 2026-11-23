let precio = Number(prompt("Digite el precio unitario:"));
let cantidad = Number(prompt("Digite la cantidad:"));
let descuentoPorcentaje = Number(prompt("Digite el descuento (0 si no hay):"));

if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuentoPorcentaje)) {
    console.log("Eso no es un número.");
    alert("Por favor, ingrese números válidos.");
} else {
    let subtotal = precio * cantidad;
    let descuento = subtotal * descuentoPorcentaje / 100;
    let valorDescuento = subtotal - descuento;
    const iva = valorDescuento * 0.19;
    let total = valorDescuento + iva;

    console.log("Subtotal: $" + subtotal);
    console.log("Descuento: $" + descuento);
    console.log("IVA: $" + iva);
    console.log("Total: $" + total);

    alert("El total es: $" + total);
}
