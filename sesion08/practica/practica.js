const aprendices = [
    { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
    { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
    { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
    { nombre: "Juan", nota: 4.8, jornada: "Noche" },
    { nombre: "María", nota: 2.5, jornada: "Tarde" },
    { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
];

/* filtar */

const aprobados = aprendices.filter((a) => a.nota >= 3.0);
console.table(aprobados)

const noche = aprendices.filter((n) => n.jornada ==  "Noche");
console.table(noche)

const manana = aprendices.filter((n) => n.jornada ==  "Mañana");
console.log(manana.length)

/* map */

const nombres = aprendices.map((x) => x.nombre);
console.log(nombres)

const conaprobado = aprendices.map((i) => ({
    ...i,
    aprobado: i.nota >= 3 ? "Aprobado" : "No Aprobado"
}));

console.table(conaprobado)

/* Find */

const juan = aprendices.find((a) => a.nombre ==="Juan")
console.log(juan)

/* SOME ==> alguno */

console.log(aprendices.some((a) => a.nota >= 4.6));
console.log(aprendices.some((a) => a.nombre === "María"));

/* every => siempre */

console.log(aprendices.every((a) => a.nota <= 5));

const jornota = aprendices
    .filter((a) => a.jornada === "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase());

console.table(jornota)

/* reduce */

const suma = aprendices.reduce((total,a) => total + a.nota, 0);
console.log(suma)

const promedio = suma / aprendices.length
console.log(promedio)

/* Sort*/

console.log([10,9,1,100,56,84580].sort())
console.log([10,9,1,100,56,84580].sort((a,b) => a - b));
console.log([10,9,1,100,56,84580].sort((a,b) => b - a));

const ranking = aprendices.toSorted((a,b) => b.nota - a.nota);
console.table(ranking)
console.table(ranking.reverse())

const alfabetico = [...aprendices].sort((a,b) => a.nombre.localeCompare(b.nombre))
console.table(alfabetico)
console.table(alfabetico.reverse())

/* JSON */

const texto = JSON.stringify(ranking, null, 2) //Empaquetando el JSON
console.log(typeof texto)
console.log(texto)

const desempaquetar = JSON.parse(texto)
console.log(desempaquetar[0].nombre)