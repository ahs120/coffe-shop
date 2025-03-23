const bars = document.querySelector(".bars");
const links = document.querySelector(".links");

bars.addEventListener("click", (e) => {
  links.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!links.contains(event.target) && !bars.contains(event.target)) {
    links.classList.remove("active");
  }
});

addEventListener("load", (event) => {
  document.querySelector(".land").classList.add("active");
});
const swiper = new Swiper(".swiper-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
