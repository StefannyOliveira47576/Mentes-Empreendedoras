let slideIndex = 0;

const slides = document.querySelectorAll('.carrosel-slide');
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}

// Mostrar o primeiro slide ao carregar a página
showSlide(slideIndex);

// Event listeners para os botões de navegação
document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});