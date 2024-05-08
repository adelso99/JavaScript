'use strict'
// Fecth (ajax) y peticiones a servicios / apis rest
// Accede a un servicio remoto para los dato

var div_usuarios = document.querySelector("#usuarios");

var usuarios =  [];

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);
        
        usuarios.map((user, i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + '.'+ user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre);
                document.querySelector(".loading").style.display = 'none';
        });

    });
    