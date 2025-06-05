let slideIndex = 1; //Starter slideshowet på slide nummer 1.
showSlides(slideIndex); //Kører funktionen, så det første slide vises.

// Next/previous controls
function plusSlides(n) {
  //Giver mulighed for at gå frem/tilbage med n antal slides (f.eks. -1 for forrige, +1 for næste).
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  //
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
