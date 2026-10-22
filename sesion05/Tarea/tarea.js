function esbisiesto(año){
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}
console.log(esbisiesto(2020)); 

function mayordetres(a, b, c) {
    if (a > b && a > c )
        return a
    else if (b > a && b > c)
        return b
    else if (c > a && c > b)
        return c
}
console.log(mayordetres(56,2251,25))

const preciofinal = (precio, descuento) => {
    return precio - (precio * descuento / 100);
}
console.log(preciofinal(48200, 20));