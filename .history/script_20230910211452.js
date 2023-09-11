const estante = [];
const imagens = [];

function cadastrar(titulo, autor, ano) {
    let livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        anoPub: ano
    }
    estante.push(livro);
}

let addButton = document.getElementById('adiciona');
let showButton = document.getElementById('exibir');
let anteButton = document.getElementById('anterior');
let proxButton = document.getElementById('proximo');
let indice = 0;
let info = document.getElementById('result');

addButton.addEventListener("click", () => {
    let titulo = document.querySelector('#nomeLivro').value;
    let autor = document.querySelector('#autorLivro').value;
    let ano = document.querySelector('#anoLivro').value;
    cadastrar(titulo, autor, ano);
    let imgsGuardadas = ['img/image1.png', 'img/image2.png', 'img/image3.png'];
    imagens.push(imgsGuardadas[indice]);
    carregar();
    ++indice;
    info.innerHTML = `${imagens.length} Livro(s) cadastrado(s).`;
})

showButton.addEventListener("click", () => {
    let livros = document.getElementById('livros');
    livros.innerHTML = "";
    for(let item of estante){
        let novo = document.createElement('h2');
        novo.innerHTML=`Livro: ${item.tituloLivro}, Autor(a): ${item.autorLivro}, Ano: ${item.anoPub}`;
        livros.appendChild(novo);
    }
})

let i = 0;
let img = document.getElementById('carrosselImagem');

function carregar() {
    img.src = imagens[i];
    document.getElementById('detalhesLivro').innerHTML = estante[i].tituloLivro;
    document.getElementById('detalhesAutor').innerHTML = `Autor(a): ${estante[i].autorLivro}`;
    document.getElementById('detalhesAno').innerHTML = `Ano de publicação: ${estante[i].anoPub}`;
}

anteButton.addEventListener('click', () => {
    if (i > 0) {
        i--;
        carregar();
    }
})

proxButton.addEventListener('click', () => {
    if (i < imagens.length - 1) {
        i++;
        carregar();
    }
})

carregar();
