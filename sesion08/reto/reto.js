
const pedidos = [
    { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },
    { id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },
    { id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },
    { id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },
    { id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },
    { id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },
    { id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },
    { id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },
    { id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },
    { id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];

const conTotal = pedidos.map((p) => ({
    ...p,
    total: p.cantidad * p.precioUnitario
}));

console.table(conTotal);

const pendientes = conTotal.filter((p) => p.estado === "pendiente");

console.log("Pedidos pendientes:", pendientes.length);

const entregados = conTotal.filter((p) => p.estado === "entregado");

const totalVendido = entregados.reduce((total, p) => total + p.total, 0);

console.log("Total vendido:", totalVendido.toLocaleString("es-CO", { style: "currency", currency: "COP" }));

const mayores = conTotal.toSorted((a, b) => b.total - a.total).slice(0, 3);

console.table(mayores);

let numero = Number(prompt("Ingrese el número del pedido que desea buscar:"));

const pedido = conTotal.find((p) => p.id === numero);

if (pedido) {
    console.log("Pedido encontrado:");
    console.log(pedido);
} else {
    console.log("El pedido no existe");
}

const domiciliosPendientes = conTotal.some((p) => p.estado === "pendiente" && p.domicilio === true);

console.log("¿Hay domicilios pendientes?", domiciliosPendientes);
