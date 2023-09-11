const estante = [];
const imagens = [];
let indice = 0;

function cadastrar(titulo, autor, ano) {
    const livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        anoPub: ano
    }
    estante.push(livro);
}

function adicionarLivro() {
    const titulo = document.querySelector('#nome').value;
    const autor = document.querySelector('#autor').value;
    const ano = document.querySelector('#ano').value;

    cadastrar(titulo, autor, ano);

    const imgsGuardadas = ['img/img1.png', 'img/img2.png', 'img/img3.png'];
    imagens.push(imgsGuardadas[indice]);

    const livrosBox = document.getElementById('livros');
    const novoLivro = document.createElement('div');
    novoLivro.classList.add('livro');
    novoLivro.innerHTML = `
        <h3>${titulo}</h3>
        <p>Autor: ${autor}</p>
        <p>Ano: ${ano}</p>
        <img src="${imagens[indice]}" alt="${titulo}">
    `;
    livrosBox.appendChild(novoLivro);

    ++indice;

    const info = document.getElementById('information');
    info.innerHTML = `${imagens.length} Livro(s) cadastrado(s)`;
}

function mostrarLivros() {
    const livrosBox = document.getElementById('livros');
    for (let item of estante) {
        const novoLivro = document.createElement('div');
        novoLivro.classList.add('livro');
        novoLivro.innerHTML = `
            <h3>${item.tituloLivro}</h3>
            <p>Autor: ${item.autorLivro}</p>
            <p>Ano: ${item.anoPub}</p>
            <img src="img/default.png" alt="${item.tituloLivro}">
        `;
        livrosBox.appendChild(novoLivro);
    }
}

function removerRegistros() {
    const livrosBox = document.getElementById('livros');
    livrosBox.innerHTML = "";
    estante.length = 0;
    imagens.length = 0;
    indice = 0;

    const info = document.getElementById('information');
    info.innerHTML = "Nenhum livro cadastrado";
}

function anterior() {
    if (indice > 0) {
        const img = document.getElementById('img');
        img.src = imagens[--indice];
    }
}

function proximo() {
    if (indice < imagens.length - 1) {
        const img = document.getElementById('img');
        img.src = imagens[++indice];
    }
}
