"use strict";

// Moblie Menu

const btnMenuOpen = document.querySelector(".btn_menu_open");
const btnMenuClose = document.querySelector(".btn_menu_close");
const menuContainer = document.querySelector(".nav_links");

const registerModal = document.querySelector(".register-modal");
const btnModalClose = document.querySelectorAll(".btn-close-modal");
const btnModalOpen = document.querySelectorAll(".btn-show-modal");
const overlay = document.querySelector(".overlay");
const btnSignInModalShow = document.querySelector(".btn-sign-in");
const signInModal = document.querySelector(".sign-in-modal");

const nav = document.querySelector(".desktop_nav");
const hero = document.querySelector(".hero");

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
overlay.addEventListener("click", closeModal);
btnSignInModalShow.addEventListener("click", function (e) {
  e.preventDefault();
  signInModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnModalClose.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

//Navigation animation

const handleHover = function (e, opacity) {
  if (
    e.target.classList.contains("nav_link") ||
    e.target.classList.contains("btn__nav")
  ) {
    const link = e.target;
    const siblings = link
      .closest(".desktop_nav")
      .querySelectorAll(".nav_link, .btn__nav");
    const logo = link.closest(".desktop_nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

//Sticky navigation

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-120px",
});
heroObserver.observe(hero);

//Reveal Sections

const activeContainer = document.querySelectorAll(".container--active");
const revealSection = function (entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("container--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

activeContainer.forEach(function (container) {
  sectionObserver.observe(container);
  container.classList.add("container--hidden");
});
