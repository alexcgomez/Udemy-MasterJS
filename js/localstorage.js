'use strict'

// LocalStorage


// Comprobar disponibilidad de LocalStorage

if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage está disponible");
}
else{
    console.log("Incompatible con LocalStorage");    
}

// Guardar dato

localStorage.setItem("titulo","Curso de Symfony");

// Recuperar dato

console.log(localStorage.getItem("titulo"));

// Guardar objetos

var usuario = {
    nombre: "Alex",
    apellido: "Caceres",
    edad: 26
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto

console.log(JSON.parse(localStorage.getItem("usuario")));