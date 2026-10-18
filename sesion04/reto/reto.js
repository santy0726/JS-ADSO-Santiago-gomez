// 1. Genera un número secreto entre 1 y 100 con `Math.floor(Math.random() * 100) + 1`.
// 2. Da al jugador **máximo 7 intentos**.
// 3. En cada intento dice "📈 Más alto" o "📉 Más bajo" y muestra en qué intento va.
// 4. Al final dice si ganó (y en cuántos intentos) o si perdió (y cuál era el número).
// - 💡 Pista
    
//     Usa un `while` con dos condiciones: que queden intentos **y** que no haya adivinado. Una variable `adivino = false` que cambia a `true` te ayuda a salir.

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza;
let adivino = false;

while (intentos < 7 && !adivino) {
    adivinanza = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
    intentos++;
    if (adivinanza == numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número secreto.");
        adivino = true;
    } else if (adivinanza < numeroSecreto) {
        alert("El número secreto es mayor. Intenta de nuevo.");
    } else if (adivinanza > numeroSecreto) {
        alert("El número secreto es menor. Intenta de nuevo.");
    }
}

if (adivino == false) {
    alert(`Lo siento, no adivinaste el número secreto. El número era ${numeroSecreto}.`);
}
