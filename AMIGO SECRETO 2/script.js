let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById("nombreAmigo");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre :).");
        return;
    }

    amigos.push(nombre);
    nombreInput.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos a la lista antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es🥳🎉🎉: ${amigoSorteado}`;
}