document.getElementById('add-book').addEventListener('click', async () => {
    // ...
  });
  
  document.getElementById('show-books').addEventListener('click', async () => {
    // ...
  });
  
  document.getElementById('delete-books').addEventListener('click', async () => {
    // ...
  });
  
  // Função para criar elementos de livro no carrossel
  function createBookElement(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
  
    const bookImage = document.createElement('img');
    bookImage.className = 'book-img';
    bookImage.src = book.imageUrl || 'assets/book_placeholder.jpg';
  
    const bookInfo = document.createElement('div');
    bookInfo.innerHTML = `<strong>Título:</strong> ${book.title || 'Desconhecido'}<br><strong>Autor:</strong> ${book.author || 'Desconhecido'}`;
  
    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookInfo);
    return bookDiv;
  }
  
  // Função para atualizar o carrossel com os livros
  async function updateCarousel() {
    const container = document.getElementById('carousel-container');
    container.innerHTML = '';
  
    try {
      const response = await fetch('http://localhost:3000/get-books');
      const books = await response.json();
  
      for (const book of books) {
        const bookElement = createBookElement(book);
        container.appendChild(bookElement);
      }
  
      // Atualizar gradient conforme a quantidade de livros
      const gradient = document.querySelector('.carousel-gradient');
      gradient.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent ${books.length * 220 + 20}px)`;
    } catch (error) {
      console.error('Erro ao obter livros:', error);
    }
  }
  
  // Atualizar o carrossel ao carregar a página
  window.addEventListener('load', () => {
    updateCarousel();
  });
  