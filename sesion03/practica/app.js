let opcion = prompt("elige: 1-empanada, 2-arepa, 3-jugo")

switch ( ( opcion)) {
    case "1":
        console.log("empanada a $2.500")        
        break;
    case "2":
        console.log("arepa a $3.000")
        break;
    case "3":
        console.log("jugo a $4.000")
        break;

    default:
        console.log("opción No valida.")
        break;
}