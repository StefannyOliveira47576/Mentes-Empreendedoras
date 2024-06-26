const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Botões
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const size = images[0].clientWidth;

// Movimentação inicial do slide
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Event listeners para os botões
nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop do carousel
carouselSlide.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = images.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (images[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = images.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
