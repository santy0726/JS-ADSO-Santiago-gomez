let num1 = Number(prompt("Digite un numero entero: "))
let num2 = Number(prompt("Digite otro numero entero: "))
let operacion = prompt("Seleccione su operación: + , - , * , / ")

switch (operacion){
    case "+":
        console.log(`la suma de ${num1} + ${num2} es ${num1+num2}`)
        break
    case "-":
        let resta = num1 - num2
        console.log(`la resta de ${num1} - ${num2} es ${resta}`)
        break
    case "*":
        console.log(`la multiplicación de ${num1} * ${num2} es ${num1*num2}`)
        break
    case "/":
        if (num2 != 0){
            console.log(`la divisón de ${num1} / ${num2} es ${num1/num2}`)        
        }else{
            console.log("No se puede hacer una división entre cero(0)")
            alert("no se puede hacer la division entre (0)cero")
        }
        break
    default:
        console.log("Elección No Valida")
        break
}