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

const BtnDesglosable = document.querySelector('.navbar2-link');
const Desglosable1 = document.querySelector('.desglosable1');
const Desglosable2 = document.querySelector('.desglosable2');
let timeoutId;

BtnDesglosable.addEventListener('mouseenter', showDesglosable);
Desglosable1.addEventListener('mouseenter', showDesglosable);
Desglosable2.addEventListener('mouseenter', showDesglosable);

function showDesglosable() {
  clearTimeout(timeoutId); // Cancelar el temporizador de ocultar
  if (window.matchMedia('(max-width: 990px)').matches) {
    Desglosable1.classList.add('inactive');
    Desglosable2.classList.remove('inactive');
  } else {
    Desglosable1.classList.remove('inactive');
    Desglosable2.classList.add('inactive');
  }
}

function hideDesglosable() {
  clearTimeout(timeoutId); // Cancelar el temporizador existente (si hay uno)
  timeoutId = setTimeout(() => {
    Desglosable1.classList.add('inactive');
    Desglosable2.classList.add('inactive');
  }, 1000); // Ocultar después de 10 segundos de inactividad
}

// Agregar eventos mouseleave a los elementos
BtnDesglosable.addEventListener('mouseleave', hideDesglosable);
Desglosable1.addEventListener('mouseleave', hideDesglosable);
Desglosable2.addEventListener('mouseleave', hideDesglosable);
