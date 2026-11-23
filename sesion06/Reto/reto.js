const correos = [];
const DOMINIO = "@adso.ejemplo.co";

let nombre;

do {
    nombre = (prompt("Ingrese el nombre completo:") ?? "").trim();

    if (nombre !== "") {

        let partes = nombre.split(" ");

        let inicial = partes[0][0];

        let apellido;

        if (partes.length === 2) {
            apellido = partes[1];
        } else {
            apellido = partes[partes.length - 2];
        }

        let usuario = (inicial + apellido).toLowerCase();

        let letrasOriginales = "áéíóúüñ";
        let letrasNuevas = "aeiouun";

        let usuarioSinTildes = "";

        for (const letra of usuario) {
            let posicion = letrasOriginales.indexOf(letra);

            if (posicion !== -1) {
                usuarioSinTildes += letrasNuevas[posicion];
            } else {
                usuarioSinTildes += letra;
            }
        }

        let correo = usuarioSinTildes + DOMINIO;
        let contador = 2;

        while (correos.includes(correo)) {
            correo = usuarioSinTildes + contador + DOMINIO;
            contador++;
        }

        correos.push(correo);
    }

} while (nombre !== "");

let resultados = [];

for (let i = 0; i < correos.length; i++) {
    resultados.push({
        numero: i + 1,
        correo: correos[i]
    });
}

console.table(resultados);

console.log("Total de correos generados:", correos.length);
