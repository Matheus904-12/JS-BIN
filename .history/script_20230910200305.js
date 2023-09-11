let biblioteca = [];
let carrosselIndex = 0;
let notifications = [];

function cadastro(nome, autor, ano, capa) {
    var livro = {
        nome: nome,
        autor: autor,
        ano: ano,
        capa: capa
    };
    biblioteca.push(livro);
    atualizarContador();
    mostrarLivros();
    startCarousel();
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    let capa = document.getElementById('capaLivro').value;
    cadastro(nome, autor, ano, capa);
    showNotification('Livro adicionado com sucesso!', true);
}

function mostrarLivros() {
    const livrosDiv = document.getElementById('livros');
    livrosDiv.innerHTML = '';

    for (let i = 0; i < biblioteca.length; i++) {
        const livro = biblioteca[i];
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');

        const infoDiv = document.createElement('div');
        const nomeAutor = document.createElement('h3');
        nomeAutor.textContent = `Nome: ${livro.nome}, Autor: ${livro.autor}`;
        infoDiv.appendChild(nomeAutor);

        const ano = document.createElement('p');
        ano.textContent = `Ano: ${livro.ano}`;
        infoDiv.appendChild(ano);

        const capaDiv = document.createElement('div');
        capaDiv.classList.add('capa-livro');
        capaDiv.style.backgroundImage = `url('${livro.capa}')`;
        livroDiv.appendChild(capaDiv);

        const btnDiv = document.createElement('div');
        const mostrarBtn = document.createElement('button');
        mostrarBtn.textContent = 'Mostrar';
        mostrarBtn.onclick = function () {
            console.log(`Nome: ${livro.nome}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        };
        btnDiv.appendChild(mostrarBtn);

        const apagarBtn = document.createElement('button');
        apagarBtn.textContent = 'Apagar';
        apagarBtn.onclick = function () {
            biblioteca.splice(i, 1);
            mostrarLivros();
            atualizarContador();
        };
        btnDiv.appendChild(apagarBtn);

        livroDiv.appendChild(infoDiv);
        livroDiv.appendChild(btnDiv);

        livrosDiv.appendChild(livroDiv);
    }

    startCarousel(); // Iniciar o carrossel após atualizar os livros
}

function apagarLivros() {
    biblioteca = [];
    atualizarContador();
    mostrarLivros();
    console.log('Biblioteca apagada');
}

function atualizarContador() {
    const contador = document.getElementById('contadorLivros');
    if (biblioteca.length === 0) {
        contador.textContent = 'Cadastre um livro';
    } else {
        contador.textContent = `${biblioteca.length} livro${biblioteca.length === 1 ? '' : 's'} cadastrado${biblioteca.length === 1 ? '' : 's'}`;
    }
}

function showNotification(message, isSuccess) {
    const notificationCarousel = document.getElementById('notification-carousel');
    const newNotification = document.createElement('div');
    newNotification.textContent = message;
    newNotification.style.backgroundColor = isSuccess ? '#28a745' : '#dc3545';
    newNotification.classList.add('