// Animação de scroll (Scroll Reveal)
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("visible");
    }
  }
});

// Executa também ao carregar a página (caso elementos já estejam visíveis)
window.addEventListener("load", function () {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < window.innerHeight - elementVisible) {
      reveals[i].classList.add("visible");
    }
  }
});
