const ESTANTE = [];
const IMAGENS = [];

function adicionar() {
    let titulo = document.querySelector('#nomeLivro').value;
    let autor = document.querySelector('#autorLivro').value;
    let ano = document.querySelector('#anoLivro').value;
    let imagemUrl = document.querySelector('#urlLivro').value;

    cadastrar(titulo, autor, ano, imagemUrl);

    let quantidade = biblioteca.length;
    document.getElementById('result').innerHTML = quantidade + " livro(s) cadastrado(s).";

    // Adiciona a imagem ao carrossel
    let carrossel = document.getElementById('carrossel');
    let novaImagem = document.createElement('img');
    novaImagem.src = imagemUrl;
    novaImagem.alt = titulo;
    carrossel.appendChild(novaImagem);

    // Limpa os campos do formulário
    document.getElementById('nomeLivro').value = '';
    document.getElementById('autorLivro').value = '';
    document.getElementById('anoLivro').value = '';
    document.getElementById('urlLivro').value = '';

    // Mostra a mensagem de sucesso
    let mensagem = document.createElement('div');
    mensagem.classList.add('sucesso');
    mensagem.innerHTML = 'Livro adicionado com sucesso!';
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(mensagem);
        }, 1000);
    }, 2000);
}


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
