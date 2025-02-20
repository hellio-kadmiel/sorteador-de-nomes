let amigos = [];


 //função para adicionar a pessoa sorteada
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    // o trim faz a seguinte funcão, corta os valores em branco que ficariam apertando a tecla 'espaço'
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome:");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado");
        return;
    }

    amigos.push(nome);
    mostrarLista();
    input.value = "";
}
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = `<li>${sorteado} foi o sortudo </li>`;
}
