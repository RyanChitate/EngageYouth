let slideIndex = 0;

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const maxIndex = slides.length - 1;

  if (slideIndex < 0) {
    slideIndex = maxIndex;
  } else if (slideIndex > maxIndex) {
    slideIndex = 0;
  }

  const slideWidth = slides[0].offsetWidth;
  const slideContainer = document.querySelector('.slider');

  slideContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
