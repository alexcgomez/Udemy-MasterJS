'use strict'

// CONDICIONALES

var edad1 = 2324;
var edad2 = 40;


if (edad1 < edad2) {
    console.log("Edad 1 es menor a Edad 2");
}
else console.log("Edad 1 es mayor que Edad 2");


/* 
Operadores relacionales
----------------------------

Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=

Operadores lógicos
----------------------------

AND: &&
OR: ||
Negación: !
*/


// SWITCH
// Estructura de control que contempla diferentes casos

var menu = 1;

switch (menu) {
    case 1:
        console.log("Has entrado en el menú 1");
        break;
    case 2:
        console.log("Has entrado en el menú 2");
    
    default:
        console.log("Menú por defecto");
        break;
}