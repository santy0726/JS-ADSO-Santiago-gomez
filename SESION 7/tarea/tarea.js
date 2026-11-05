const agenda = [
    {nombre: "Santiago", telefono: "3113580180", correo: "santy@gmail.com"},
    {nombre: "Yeraldin", telefono: "3126366165", correo: "yeraldin@gmail.com"},
    {nombre: "Camilo", telefono: "3202867174", correo: "camilo@gmail.com"}
];

let opcion;

do {
    opcion = prompt("1. Agregar\n2. Ver agenda\n3. Buscar\n0. Salir");
    switch (opcion) {

        case "1":
            let nombre = prompt("Nombre:");
            let telefono = prompt("Telefono:");
            let correo = prompt("Correo:");
            agenda.push({nombre, telefono, correo});
            break;

        case "2":
            console.table(agenda);
            break;

        case "3":
            let buscar = prompt("Nombre a buscar:");
            for (let contacto of agenda) {
                if (contacto.nombre.toLowerCase().includes(buscar.toLowerCase())) {
                    console.log(contacto);
                }
            }
            break;
    }

} while (opcion != "0");