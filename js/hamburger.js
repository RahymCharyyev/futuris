let wrapperMenu = document.querySelector("#menu");
let menuLinks = document.querySelector(".menu-links");
wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  menuLinks.classList.toggle("open");
});
