const ESTANTE = [];
const IMAGENS = [];

function cadastrar(titulo, autor, ano) {
    let livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        anoPub: ano
    }
    ESTANTE.push(livro);
}

let addButton = document.getElementById('adicionar');
let showButton = document.getElementById('mostrar');
let removeButton = document.getElementById('remover');
let prevButton = document.getElementById('ante');
let nextButton = document.getElementById('prox');
let indice = 0;
let info = document.getElementById('information');
let livrosBox = document.getElementById('livros');

addButton.addEventListener("click", () => {
    let titulo = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let ano = document.querySelector('#ano').value;
    cadastrar(titulo, autor, ano);
    let imgsGuardadas = ['img/img1.png', 'img/img2.png', 'img/img3.png'];
    IMAGENS.push(imgsGuardadas[indice]);
    let novoLivro = document.createElement('div');
    novoLivro.classList.add('livro');
    novoLivro.innerHTML = `<h3>${titulo}</h3><p>Autor: ${autor}</p><p>Ano: ${ano}</p><img src="${IMAGENS[indice]}" alt="${titulo}">`;
    livrosBox.appendChild(novoLivro);
    ++indice;
    info.innerHTML = `${IMAGENS.length} Livro(s) cadastrado(s)`;

    // Adicionando mensagem de sucesso
    let mensagem = document.createElement('div');
    mensagem.classList.add('sucesso');
    mensagem.innerText = 'Livro adicionado com sucesso';
    document.body.appendChild(mensagem);
    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
            mensagem.remove();
        }, 1000);
    }, 2000);
});

showButton.addEventListener("click", () => {
    for (let item of ESTANTE) {
        let novo = document.createElement('h2');
        novo.innerHTML = `Livro: ${item.tituloLivro}, Autor(a): ${item.autorLivro}, Ano: ${item.anoPub}`;
        let livrosBox = document.getElementById('livros');
        let novoLivro = document.createElement('div');
        novoLivro.classList.add('livro');
        novoLivro.innerHTML = `<h3>${item.tituloLivro}</h3><p>Autor: ${item.autorLivro}</p><p>Ano: ${item.anoPub}</p><img src="img/default.png" alt="${item.tituloLivro}">`;
        livrosBox.appendChild(novoLivro);
    }
});

removeButton.addEventListener("click", () => {
    let livrosBox = document.getElementById('livros');
    livrosBox.innerHTML = "";
    ESTANTE.length = 0;
    IMAGENS.length = 0;
    info.innerHTML = "Nenhum livro cadastrado";
    indice = 0;
});

let i = 0
let img = document.getElementById('img');

prevButton.addEventListener('click', () => {
    if (i > 0) {
        img.src = IMAGENS[--i];
    }
});

nextButton.addEventListener('click', () => {
    if (i < IMAGENS.length - 1) {
        img.src = IMAGENS[++i];
    }
});
