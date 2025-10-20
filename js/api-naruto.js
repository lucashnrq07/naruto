console.log("API do Naruto carregada com sucesso!");
let personagens;

// Obter todos os personagens
fetch('https://naruto-br-api.site/characters')
    .then(response => response.json())
    .then(data => personagens = data)
    .then(() => mostrarPersonagem());

function mostrarPersonagem() {
    const id = (Math.floor(Math.random() * personagens.length));

    const personagem = personagens[id];
    console.log(personagem)
    document.getElementById("imagem").src = personagem.profile_image
    document.getElementById("char-name").textContent = personagem.name
    document.getElementById("rank").textContent = personagem.rank
    document.getElementById("char-village").textContent = personagem.village.name
    document.getElementById("char-summary").textContent = personagem.summary
    document.getElementById("char-power").textContent = `Força: ${personagem.power}`

    let lista = '<ul>';
    for (let i = 0; i < personagem.jutsus.length; i++){
        lista += `<li>${personagem.jutsus[i].name}</li>`
    }
    if (personagem.jutsus.length === 0){
        lista += '<li>Sem habilidades cadastradas</li>'
    }
    lista += '</ul>';
    document.getElementById("habilidade").innerHTML = lista;
    }