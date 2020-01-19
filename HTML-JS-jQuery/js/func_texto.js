'use strict'

// Transformación de textos

var numero = 44;
var texto1 = "Hola, soy el texto 1";
var texto2 = "Hola, soy el texto 2";

var dato = numero.toString();       // Convierte a String
    dato = texto1.toUpperCase();    // Convierte a MAYÚSCULAS
    dato = texto2.toLowerCase();    // Convierte a minúsculas

console.log(dato);

// Calcular longitud de texto

var nombre = "";
console.log(nombre.length);

// Concatenar

var textototal = texto1.concat(" " + texto2);
console.log(textototal);

// Posición de textos

var busqueda1 = texto1.indexOf(",");   // primera aparición de carácter
console.log(busqueda1);

var busqueda2 = texto1.lastIndexOf("l") // Última aparción de ese carácter
console.log(busqueda2);

var busqueda3 = texto1.search("soy");   // Realiza una búsqueda y devuelve en que carácter se encuentra la palabra
console.log(busqueda3);

var busqueda4 = texto1.match("Hola")    // Devuelve una array con los resultados que encuentra
console.log(busqueda4);

var busqueda5 = texto1.substr(5,7) // Devuelve 7 caracteres a partir de la posición 5
console.log(busqueda5);

var busqueda6 = texto1.charAt(4) // Devuelve caracter de la posición 4.
console.log(busqueda6);

var busqueda7 = texto1.startsWith("Hol") // Devuelve true si el texto empieza por "Hol"
console.log(busqueda7);

var busqueda8 = texto1.endsWith("1") // Devuelve true si el texto termina en "1".
console.log(busqueda8);

var busqueda9 = texto1.includes("soy") // Devuelve true si la palabra se encuentra en el texto.
console.log(busqueda9);

// Reemplazar texto

console.log(texto1);
var busqueda10 = texto1.replace("soy","yo soy") // Reemplaza el primer parámetro por el segundo
console.log(busqueda10);

var busqueda11 = texto1.slice(5,8)  // Recorta string desde el caracter 5 hasta el 8
console.log(busqueda11);

var busqueda12 = texto1.split(" ")     // Convierte String a array de Strings. Separadas por espacios.
console.log(busqueda12);

var busqueda13 = texto1.trim()      // Método que elimina espacios sobrantes por delante y por detrás del texto.











