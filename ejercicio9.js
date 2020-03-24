'use strict' 

function numeros(){

let num1 = Number(prompt("Introduce un numero"))

let num2 = Number(prompt("Introduce un numero"))

let result = 0

if (num2 == 0)

console.log("La division no se puede efectuar")

else {

let result = num1 / num2

console.log("La division es " + result)
}

}

numeros()