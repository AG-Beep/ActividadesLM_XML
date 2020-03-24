'use strict'

let color = "negro"

function PreguntarColor()
{

	let colorfav = prompt("Cual es tu color favorito")
	if(color == colorfav){

		alert("El mio tambien es mi favorito" + color)
	}

		console.log(color)

}

PreguntarColor()

