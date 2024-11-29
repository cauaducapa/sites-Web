let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carrosselContainer = document.querySelector('.carrossel-container');

// Função para mover o carrossel
function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  carrosselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Navegação automática
function autoMove() {
  moveSlide(1);
}

// Iniciar navegação automática a cada 3 segundos
let autoSlideInterval = setInterval(autoMove, 3000);

// Pausar a navegação automática ao interagir com os botões
document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  moveSlide(-1);
  autoSlideInterval = setInterval(autoMove, 3000); // reiniciar o intervalo após a interação
});

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  moveSlide(1);
  autoSlideInterval = setInterval(autoMove, 3000); // reiniciar o intervalo após a interação
});
