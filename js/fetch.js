'use strict'

// FETCH 
// Realiza peticiones (AJAX) asíncronas a servicios / API Rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsuarios()                           // 1a Promesa
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();              // 2a promesa
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);
        return getInfo();               // 3a promesa
    })
    .then(data =>{
        console.log(data);
        
    })

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getInfo() {
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    }
    
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
        },3000);

        if(typeof profesor_string != 'string') return reject('Error');
    
        return resolve(profesor_string)
    })
}

function mostrarJanet(user){
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");
        nombre.innerHTML = user.first_name + " " + user.email;
        avatar.src = user.avatar;
        avatar.width = '100';
        div_janet.appendChild(avatar);
        div_janet.appendChild(nombre);
        document.querySelector("#janet .loading").style.display = 'none'; 
}

function listadoUsuarios(usuarios){
    usuarios.map ((user, i) => {
        let nombre = document.createElement("h4");
        nombre.innerHTML = i + " " + user.first_name + " " + user.email;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none'; 
    });
}

