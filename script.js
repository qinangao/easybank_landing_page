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

const registerModal = document.querySelector(".register-modal");
const btnModalClose = document.querySelectorAll(".btn-close-modal");
const btnModalOpen = document.querySelectorAll(".btn-show-modal");
const overlay = document.querySelector(".overlay");
const btnSignInModalShow = document.querySelector(".btn-sign-in");
const signInModal = document.querySelector(".sign-in-modal");
console.log(btnModalClose);

const openModal = function (e) {
  e.preventDefault();
  registerModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  registerModal.classList.add("hidden");
  overlay.classList.add("hidden");
  signInModal.classList.add("hidden");
};

btnModalOpen.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnSignInModalShow.addEventListener("click", function (e) {
  e.preventDefault();
  signInModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnModalClose.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});
