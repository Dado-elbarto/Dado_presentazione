// Gestione cambio sezione (Home, Puntate, Informazioni)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const ctaButtons = document.querySelectorAll("[data-section-target]");
  const playButtons = document.querySelectorAll(".play-btn");

  function showSection(sectionId) {
    sections.forEach(sec => {
      sec.classList.toggle("visible", sec.id === sectionId);
    });

    navLinks.forEach(link => {
      const target = link.getAttribute("data-section");
      link.classList.toggle("active", target === sectionId);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const sectionId = link.getAttribute("data-section");
      showSection(sectionId);
    });
  });

  ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section-target");
      showSection(target);
    });
  });

  // Gestione avvio video locali
  playButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const videoPath = btn.getAttribute("data-video-path");
      if (!videoPath) return;

      // Prova ad aprire il file video in una nuova scheda/finestra
      // (funzionerà solo se il browser ha accesso al percorso indicato)
      window.open(videoPath, "_blank");
    });
  });

  // Sezione iniziale: Home
  showSection("home");
});

// Controlla se è stato passato un parametro ?section=...
const urlParams = new URLSearchParams(window.location.search);
const sectionFromURL = urlParams.get("section");

if (sectionFromURL) {
  showSection(sectionFromURL);
}
