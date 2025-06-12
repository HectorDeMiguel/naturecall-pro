window.addEventListener("DOMContentLoaded", () => {
  // Ajustarel padding del contenido principal según la altura de la barra de navegación
  const nav = document.querySelector("nav.main-nav");
  const mainContent = document.querySelector("main");

  if (nav && mainContent) {
    const navHeight = nav.offsetHeight;
    mainContent.style.paddingTop = navHeight + "px";
  }

  // Mobile Menu Toggle
  const navButtons = document.querySelectorAll('#navIcons button');
  if (navButtons.length > 1) {
    const menuButton = navButtons[1]; // Segundo botón (BURGERMENU)
    const icon = menuButton.querySelector('img');
    const navListMobile = document.querySelector('.navListMobile');
  

    let menuOpen = false;

    menuButton.addEventListener('click', function () {
      menuOpen = !menuOpen;
      this.setAttribute('aria-expanded', menuOpen);

      if (navListMobile) {
        navListMobile.style.display = menuOpen ? 'flex' : 'none';
      }
      if (icon) {
        icon.src = menuOpen ? 'IMG/BURGERMENU_Close.svg' : 'IMG/BURGERMENU.svg';
        icon.alt = menuOpen ? 'Close menu' : 'Open menu';
      }
    });
  }

});