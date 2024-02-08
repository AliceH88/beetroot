document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    menuIcon.addEventListener("click", function() {
      menuToggle.checked = !menuToggle.checked;
    });
  });
  