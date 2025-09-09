const carousel = document.querySelector(".carousel");
const imgCard = carousel.querySelectorAll(".card");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const indicators = document.querySelectorAll("span");

setInterval(() => {
  carousel.scrollLeft += 1300;
  carousel.style.scrollBehavior = "smooth";
}, 7000);
right.addEventListener("click", () => {
  carousel.scrollLeft += 1300;
  carousel.style.scrollBehavior = "smooth";
});
left.addEventListener("click", () => {
  carousel.scrollLeft -= 1300;
  carousel.style.scrollBehavior = "smooth";
});
carousel.addEventListener("wheel", (e) => {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
  carousel.style.scrollBehavior = "auto";
});

const cardWidth = imgCard[0].offsetWidth + 900;
console.log(cardWidth);

indicators[0].classList.add("active");
carousel.addEventListener("scroll", () => {
  // finding the current index of the card
  const currentIndex = Math.round(carousel.scrollLeft / cardWidth);
  // looping through the indicators to find the current "active" indicator and remove it
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  // while this code adds the "active" class to the current indicator
    indicators[currentIndex].classList.add("active");
});
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    carousel.scrollLeft = index * cardWidth;
    carousel.style.scrollBehavior = "smooth";
  });
});
