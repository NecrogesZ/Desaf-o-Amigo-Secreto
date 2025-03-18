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

// Creamos la función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const lAmigos = document.getElementById("listaAmigos");
    lAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        lAmigos.appendChild(li); 
    }
);
}
// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const indiceA = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[indiceA];
    const resultadoFinal = document.getElementById("resultado");
    resultadoFinal.innerHTML = `El amigo sorteado es: ${amigoElegido}`;
}
