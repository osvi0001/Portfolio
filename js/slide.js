document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0 || dots.length === 0) return;

  let slideIndex = 1;

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // Export to global scope so HTML onclicks still work
  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  showSlides(slideIndex);
});
