const burgerMenu = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".off-screen-menu");

if (burgerMenu && offScreenMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
}
