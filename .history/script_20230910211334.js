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

let addButton = document.getElementById('add');
let showButton = document.getElementById('show');
let anteButton = document.getElementById('ante');
let proxButton = document.getElementById('prox');
let indice = 0;
let info = document.getElementById('information');

addButton.addEventListener("click", () => {
    let titulo = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let ano = document.querySelector('#ano').value;
    cadastrar(titulo, autor, ano);
    let imgsGuardadas = ['img/img1.png', 'img/img2.png', 'img/img3.png'];
    imagens.push(imgsGuardadas[indice]);
    img.src = imagens[indice];
    ++indice;
    info.innerHTML = `${imagens.length} Livro(s) cadastrado(s)`;
})

let livros=document.getElementById('livros');

showButton.addEventListener("click", () => {
    for(let item of estante){
        let novo = document.createElement('h2');
        novo.innerHTML=`Livro: ${item.tituloLivro}, Autor(a): ${item.autorLivro}, Ano: ${item.anoPub}`;
        livros.appendChild(novo);
    }
})

let i = 0
let img = document.getElementById('img');

anteButton.addEventListener('click', () => {
    if (i > 0) {
        img.src = imagens[--i];
    }
})
proxButton.addEventListener('click', () => {
    if (i < imagens.length - 1) {
        img.src = imagens[++i];
    }
})
