console.log("EJERCICIO 1: SEGUNDOS A RELOJ");

let entrada = Number(prompt("Digite la cantidad de segundos:"));

if (Number.isNaN(entrada) || entrada < 0) {
    console.log("Digite una cantidad válida de segundos.");
} else {
    let horas = Math.floor(entrada / 3600);
    let minutos = Math.floor((entrada % 3600) / 60);
    let segundos = entrada % 60;

    console.log(horas + " h " + minutos + " min " + segundos + " s");
}


console.log("EJERCICIO 2: TEMPERATURA");

entrada = Number(prompt("Digite la temperatura en grados Celsius:"));

if (Number.isNaN(entrada)) {
    console.log("Eso no es un número.");
} else {
    let fahrenheit = entrada * 9 / 5 + 32;

    console.log("Temperatura en Fahrenheit: " + fahrenheit.toFixed(1) + " °F");
}


console.log("EJERCICIO 3: PROMEDIO");

let nota1 = Number(prompt("Digite la primera nota:"));
let nota2 = Number(prompt("Digite la segunda nota:"));
let nota3 = Number(prompt("Digite la tercera nota:"));

if (Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)) {
    console.log("Debe ingresar números válidos para las tres notas.");
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;

    console.log("El promedio es: " + promedio.toFixed(1));
}