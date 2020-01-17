'use strict'

// BOM - Browser Object Model

function getWindow(){
    document.write("Window Height\ ");
    document.write(window.innerHeight);
    document.write("\ ");
    document.write("Window Width\ ");
    document.write(window.innerWidth);
    document.write("\ ");
}

getWindow();

function getURL() {
    document.write(window.location);
    
}
document.write("\ Localización\ ")
getURL();

function abrirVentana(url){
    window.open(url);
}