"use strict";

// Moblie Menu

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

//Modal Window

const modal = document.querySelector(".modal");
const btnModalClose = document.querySelector(".btn-close-modal");
const btnModalOpen = document.querySelectorAll(".btn-show-modal");
const overlay = document.querySelector(".overlay");
//Open modal

btnModalOpen.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

btnModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
