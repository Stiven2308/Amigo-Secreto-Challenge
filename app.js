// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Implementa una función para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    if (nombre === '' || !regex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios entre palabras)');
        return;
    }
    amigos.push(nombre);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
}

// Implementa una función para actualizar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Implementa una función para sortear los amigos
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
