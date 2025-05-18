window.onload = function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 700 } },
      color: { value: "#d1c4e9" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 4, random: true },
      move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 120 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
};
