"use strict";

const btnMenuOpen = document.querySelector(".btn_menu_open");
const btnMenuClose = document.querySelector(".btn_menu_close");

const menuContainer = document.querySelector(".nav_links");

btnMenuOpen.addEventListener("click", function (e) {
  e.preventDefault();
  menuContainer.style.display = "block";
  btnMenuClose.style.display = "block";
  btnMenuOpen.style.display = "none";
});

btnMenuClose.addEventListener("click", function () {
  menuContainer.style.display = "none";
  btnMenuClose.style.display = "none";
  btnMenuOpen.style.display = "block";
});
