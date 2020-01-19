'use strict'

// Let y Var


// VAR

var num = 40;
console.log(num);

if (true) {
    var num = 50;
    console.log(num);
}

// LET
// Let crea variables locales a nivel de bloque, en este caso, dentro de un if. En cambio, var define una variable global para todos los bloques.

var num1 = 10;
console.log(num1);

if (true) {
    let num1 = 20;
    console.log(num1);
}

console.log(num1);