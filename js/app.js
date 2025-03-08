const bars = document.querySelector(".bars");
const links = document.querySelector(".links");

bars.addEventListener("click", (e) => {
  links.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!links.contains(event.target) && !bars.contains(event.target)) {
    links.classList.remove("active"); // إخفاء القائمة عند الضغط خارجها
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".land").classList.add("active");
});
