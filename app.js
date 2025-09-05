const carousel = document.querySelector(".carousel");
const imgCard = carousel.querySelectorAll(".card");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", () => {
  carousel.scrollLeft += 900;
  carousel.style.scrollBehaviour = "smooth";
});
left.addEventListener("click", () => {
  carousel.scrollLeft -= 900;
  carousel.style.scrollBehaviour = "smooth";
});
carousel.addEventListener("wheel", (e) => {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
  carousel.style.scrollBehaviour = "auto";
});
