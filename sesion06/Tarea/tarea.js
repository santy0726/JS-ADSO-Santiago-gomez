
function contarPalabras(frase) {

    frase = frase.trim();

    if (frase === "") {
        return 0;
    }

    let palabras = frase.split(" ");
    let contador = 0;

    for (const palabra of palabras) {
        if (palabra !== "") {
            contador++;
        }
    }

    return contador;
}


function formatoTitulo(frase) {

    frase = frase.trim();

    let palabras = frase.split(" ");
    let resultado = [];

    for (const palabra of palabras) {

        if (palabra !== "") {

            let primeraLetra = palabra[0].toUpperCase();
            let resto = palabra.slice(1).toLowerCase();

            resultado.push(primeraLetra + resto);
        }
    }

    return resultado.join(" ");
}


console.log(contarPalabras("Hola mundo"));
console.log(contarPalabras("Estoy aprendiendo JavaScript"));
console.log(contarPalabras("Hola     mundo    JavaScript"));
console.log(contarPalabras(""));

console.log(formatoTitulo("hOLA mUNDO"));
console.log(formatoTitulo("ana maria gOMEZ"));
console.log(formatoTitulo("APRENDIENDO JAVASCRIPT"));
