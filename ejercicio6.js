'use strict' 

function CalcularMedia(){

let contador = 0
let result = 0

let num = Number(prompt("Introduce un numero"))
while(num != -1) {

contador++

result = num + num

num = Number(prompt("Introduce un numero"))
}

let resultado = result / contador

console.log(resultado)

}
CalcularMedia()