document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
  });

  const yearSpan = document.querySelector('.copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const productsGrid = document.querySelector('.products-grid');

  // Função de redirecionamento
  window.paginaRonnieColeman = function () {
    window.location.href = "compra1.html";
  };
});
