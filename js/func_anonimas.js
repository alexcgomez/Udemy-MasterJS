'use strict'

// Funciones Anónimas
// Es una función que no tiene nombre

var pelicula = function(nombre) {
        return "La pelicula es: " + nombre;
}

// Callback
// Es una función que se ejecuta dentro de otra función. Es una función que se le pasa como parámetro otra función.

function operaciones(num1,num2,producto,division){
    var suma = num1+num2;
    console.log(suma);
    producto(num1,num2);
    division(num1,num2);
    
}

operaciones(2,3, (num1,num2)=>{
    console.log(num1*num2);
    
},function(num1,num2){
    console.log(num1/num2);
    
})


// Funciones flecha
// Funciones de callback escritas de la siguiente manera

function sumame(num1,num2,muestra) {
    var sumar = num1+num2;
    muestra(sumar);
    return sumar;
}
sumame(2,1, (dato) => {  // Si solo hay 1 parámetro no hace falta paréntesis
    console.log("La suma es: " + dato);
});
    