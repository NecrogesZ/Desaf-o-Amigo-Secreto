// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creamos el array para almacenar nombres

let amigos = []

// Creamos la función para agregar amigos seleccionando desde el ID 

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value;
    if (amigo === "" ) {
        alert("Por favor ingresar un valor valido");
        } else {
            amigos.push(amigo);
            console.log(amigos)
        }

        document.getElementById("amigo").value = "";

    }

