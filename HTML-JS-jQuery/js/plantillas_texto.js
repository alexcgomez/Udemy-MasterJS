'use strict'

// Plantilla de texto

var nombre = prompt("Mete tu nombre")
var apellidos = prompt("Mete tus apellidos")

//var texto = "Mi nombre es " + nombre + " <br> , mis apellidos " + apellidos



// Lo anterior, se puede hacer con una plantilla, con comillas invertidas, podemos incrustar html en JavaScript e interpolar variables usando ${}. Nuevos estándares de ECMAScript 6

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`
document.write(texto)

