console.log("API do Naruto carregada com sucesso!");
let personagens;

// Obter todos os personagens
fetch('https://naruto-br-api.site/characters')
    .then(response => response.json())
    .then(data => personagens = data);
console.log("Deu certo!");
console.log(personagens);

function mostrarPersonagem() {
    console.log(personagens);
    let id = (Math.floor(Math.random() * personagens.length));
    console.log(id);

    let personagem = personagens[id];
    console.log(personagem)
    document.getElementById("imagem").src = personagem.profile_image;
    document.getElementById("char-name").textContent = personagem.name
    document.getElementById("char-power").textContent = personagem.power
    document.getElementById("char-village").textContent = personagem.village.name
    document.getElementById("char-summary").textContent = personagem.summary
}