'use strict'


// Funciones
// Una funcion es un conjunto reutilizable de instrucciones

function calculadora(num1,num2) {
    
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("División: " + (num1*num2));
    console.log("Multiplicación: " + (num1/num2));
    
}

calculadora(5,5);


// Parámetros opcionales
// Parámetros que vienen con un valor por defecto y por lo tanto no es obligatorio pasarlos

function nombre(nom = "Alex", ape = "Caceres") {
    console.log("Mi nombre es: ",nom,ape);
};

nombre();

// Parámetros REST y SPREAD

// Rest , si pongo los ... delante del último parámetro, la función se prepara recibir una array de parámetros.

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas);
    
       
}

// Spread, si cuando llamo a la función, pongo los ... delante del parámetro que es una array, tomará los valores de forma ordenada. En este ejemplo: frutas[0] = Primer parámetro, frutas[1] = Segundo parámetro, frutas[...] = resto_de_frutas.

var frutas = ["Manzana", "Naranjas","Melon","Sandia", "Piña", "Pera"]

listadoFrutas(...frutas);