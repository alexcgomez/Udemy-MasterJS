'use strict'

// ARRAYS
// Colección de datos en una variable


// En JS los arreglos pueden llevar distintos tipos de datos
var arreglo = [1,2,3,4,5,6,7,8,9,0, true, "Alex"];
console.log(arreglo);

// Métodos de los ARRAYS

var m1 = arreglo.length;
console.log(m1);            // Muestra la longitud del array

// Recorrer array

document.write("<h1>Elementos del array:</h1>");
document.write("<ul>")
arreglo.forEach((elemento,index)=>{
    document.write("<li>" + index + " - " + elemento + "</li>")
})
document.write("</ul>")

// Operaciones con ARRAYS

// .push() Añade un elemento al array
var pelis = ["Spiderman","Black Panther"]
pelis.push("Interestellar")
pelis.push(prompt("Añade tu pelicula: "))
console.log(pelis);

// .pop() elimina último elemento del array
pelis.pop()
console.log(pelis);

// Eliminar un elemento en concreto, en JS no son ArrayList como en Java, no hay .remove()

var i = pelis.indexOf("Spiderman")
    if (i > -1) {
        pelis.splice(i,1)
    }
    else console.log("La pelicula no se encuentra")

// Convertir una array a texto separado por comas
var texto = pelis.join()
console.log(texto);

// Convertir cadena de texto en array

var texto1 = "Esto es una gran cadena de texto"
var array_cadena = texto1.split(" ") // Todo lo que este separado por espacios
console.log(array_cadena);

// Ordenar arrays

pelis.sort(); // Ordena por orden alfabetico
console.log(pelis);

pelis.reverse() // Da la vuelta al array
console.log(pelis);

// Recorrer array

for (const key in array_cadena) {
    document.write(array_cadena[key])
}

// Busquedas dentro de un array

var busqueda = pelis.find((Pelicula)=> Pelicula == "Interestellar")
console.log(busqueda);  // Devuelve la peli si la encuentra

var busqueda2 = pelis.findIndex((Pelicula)=> Pelicula == "Interestellar")       // Devuelve el indice si la encuentra
console.log(busqueda2);

var precios = [22,43,43,5,32,23,6,235]

var busqueda3 = precios.find((Precio)=> Precio >= 100)
console.log(busqueda3); // Devuelve aquel valor mayor a 100
