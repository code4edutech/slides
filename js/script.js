let currentIndex = 0;
const totalSlides = 5; // Total de slides

// Função para mover o slide
function moveSlide(step) {
  const slides = document.querySelector('.slide');
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  const offset = -(currentIndex * 100 / totalSlides);
  slides.style.transform = `translateX(${offset}%)`;
}

// Função para o slide automático
function autoSlide() {
  moveSlide(1);
}

// Iniciar o slide automático a cada 3 segundos
setInterval(autoSlide, 3000);
