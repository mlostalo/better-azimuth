// src/scripts/menu.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
  
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
  