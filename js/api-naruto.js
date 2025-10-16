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
    console.log(personagem.name);
    console.log(personagem.power);
    console.log(personagem.village.name);
    console.log(personagem.images[0].image_url);
}