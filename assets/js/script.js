'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * Boton desglosable
 */

const BtnDesglosable = document.querySelector('.navbar2-link'); // Selecciona el enlace que activa el desglosable
const Desglosable1 = document.querySelector('.desglosable1'); // Selecciona el elemento que quieres mostrar/ocultar

BtnDesglosable.addEventListener('click', toggleDesglosable);

function toggleDesglosable() {
  Desglosable1.classList.toggle('active'); // Cambia la clase de este elemento, no de BtnDesglosable
}
