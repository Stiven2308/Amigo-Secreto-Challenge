// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Función de agregado de lista de amigos.
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    amigos.push(nombre);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
}
// Actualiza la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(li);
}
