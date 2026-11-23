const nombre = "Ana";
let edad = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

console.log(7 / 2);   //3.5
console.log(7 % 2);   // 1
console.log(2 ** 3);   //8
console.log(10 + 3 * 2); //16
console.log((10 + 3) * 2);//26
console.log(0.1 + 0.2); //0.3

console.log("5"+"5")
console.log("5"+ 5 + 5)
console.log(5+5)
console.log(5+5+"5")

console.log(typeof("5"+"5"))
console.log(typeof("5"+ 5 + 5))
console.log(typeof ( 5+5))
console.log(typeof( 5+5+"5"))

// let nombre1 = prompt("Digite su nombre: ")
// let entrada = Number(prompt("Digite su edad"))
// let edad1 = 0
// let suma = 0

// console.log(`Su nombre es: ${nombre1}`)

// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     edad1 = entrada
//     suma = edad1 + 15
//     console.log("Y su edad incrementada es " + suma)
// }

// let nota1= 0
// entrada = Number(prompt("Digite su nota de JavaScript"))

// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     nota = entrada
//     console.log(`su Nota definitiva es ${nota}`)
// }
// console.log(`su nombre es ${nombre1}`)
// console.log("su edad incremetanda es" + suma)
// console.log(`su nota definitiva es ${nota}`)

let nota2 = Number(prompt("ingresa una nota: "))
let nota3 = Number(prompt("ingresa una nota: "))
let nota4 = Number(prompt("ingresa una nota: "))

let promedio = (nota2 + nota3 + nota4)/3
alert(`el promedio es ${promedio}`)
console.log(`su nota definitiva es ${promedio.toFixed(1)}`)

let pesos = 250000;
console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));