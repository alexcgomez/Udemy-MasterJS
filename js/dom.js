'use strict'

// DOM - Document Object Model

// Selecciono elemento de la pagina mediante document
var caja = document.getElementById("micaja")

// Lo puedo modificar desde JS
caja.innerHTML = "Nuevo texto desde JS"

// Puedo cambiar estilos
caja.style.background = "Green"
caja.style.color = "White"

function cambia_color(color) {     
    caja.style.color = color
}
console.log(caja);


// QuerySelector
// Elementos:
//      - " " Nombre de la etiqueta
//      - "#" ID del elemento
//      - "." Clase del elemento

caja.querySelector("#micaja")

// Seleccionar elementos by Tag

var elementos  = document.getElementsByTagName("div")

console.log(elementos);

elementos[1].innerHTML = "Cambiando el contenido del div 1 mediante JS"

console.log(elementos[1])
