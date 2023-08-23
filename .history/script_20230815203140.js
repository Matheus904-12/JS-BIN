   //--Inicio da caixa--//

   let biblioteca = [];
   let carrosselIndex = 0;
   let notifications = [];

   let n = 0;
   while (n < 3) {
       n++;
   }
   
   function cadastro(nome, autor, ano) {
    var livro = {
        nome: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);
    atualizarContador();
    mostrarLivros();
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
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
        
        const btnDiv = document.createElement('div');
        const mostrarBtn = document.createElement('button');
        mostrarBtn.textContent = 'Mostrar';
        mostrarBtn.onclick = function() {
            console.log(`Nome: ${livro.nome}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        };
        btnDiv.appendChild(mostrarBtn);
        
        const apagarBtn = document.createElement('button');
        apagarBtn.textContent = 'Apagar';
        apagarBtn.onclick = function() {
            biblioteca.splice(i, 1);
            mostrarLivros();
            atualizarContador();
        };
        btnDiv.appendChild(apagarBtn);
        
        livroDiv.appendChild(infoDiv);
        livroDiv.appendChild(btnDiv);
        
        livrosDiv.appendChild(livroDiv);
    }
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

//-- Início das Notificações --//

let notifications = [];
let currentNotificationIndex = 0;

function showNotification(message, isSuccess) {
    const notificationCarousel = document.getElementById('notification-carousel');
    const newNotification = document.createElement('div');
    newNotification.textContent = message;
    newNotification.style.backgroundColor = isSuccess ? '#28a745' : '#dc3545';
    newNotification.classList.add('notification');
    notificationCarousel.appendChild(newNotification);

    notifications.push(newNotification);
    startCarousel();
}

//-- Fim das Notificações --//

//-- Início do carrossel --//

let carrosselIndex = 0;

function startCarousel() {
    const carrossel = document.getElementById('carrossel');
    carrossel.innerHTML = '';

    for (let i = 0; i < biblioteca.length; i++) {
        const livro = biblioteca[i];
        const capaDiv = document.createElement('div');
        capaDiv.classList.add('capa');
        // Substitua 'URL_DA_CAPA_DO_LIVRO' pela URL real da capa do livro
        capaDiv.style.backgroundImage = `url('URL_DA_CAPA_DO_LIVRO')`;

        carrossel.appendChild(capaDiv);
    }

    carrosselIndex = 0;
    showNextCarrosselItem();
}

function showNextCarrosselItem() {
    const carrossel = document.getElementById('carrossel');
    const capas = carrossel.querySelectorAll('.capa');

    if (capas.length > 0) {
        capas[carrosselIndex].style.opacity = '1';

        setTimeout(() => {
            capas[carrosselIndex].style.opacity = '0';
            carrosselIndex = (carrosselIndex + 1) % capas.length;
            showNextCarrosselItem();
        }, 3000); // Troca a cada 3 segundos (3000 milissegundos)
    }
}

//-- Fim do carrossel --//