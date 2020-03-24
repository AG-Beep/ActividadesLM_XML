'use strict'

let num = Number(prompt("Introduce un numero"))

let contador = 0

let result = 0

function MostrarTablaMultiplicar(){

while (contador < 10){

contador++

result = contador*num

console.log(result)
}
}
MostrarTablaMultiplicar()

