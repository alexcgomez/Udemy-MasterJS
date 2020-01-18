'use strict'

var fecha = new Date();

console.log(fecha);

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
`;

console.log(textoHora);
