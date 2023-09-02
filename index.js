/* ---- particles.js config ---- */
particlesJS({
  particles: {
    number: { value: 180, density: { enable: true, value_area: 1000 } },
    color: { value: "#191431" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#fbbbb4" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 00, height: 1000 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 8, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 90, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fbbbb4",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 900, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

//двигаем текст

gsap.from(".navbar", {
  y: -100,
  delay: 1,
  duration: 2,
  opacity: 0.2,
  ease: "bounse",
});
gsap.from(".myname", {
  y: -500,
  delay: 2,
  duration: 3,
  opacity: 0.4,
  ease: "bounse",
});
gsap.from(".mynametwo", {
  x: -1000,
  delay: 4,
  duration: 4,
  opacity: 0.2,
  ease: "bounse",
});
gsap.from(".dev", { y: -1600, duration: 5, delay: 3, ease: "power4" });
gsap.from(".btn-contact", {
  y: 50,
  delay: 4,
  duration: 2,
  opacity: 0,
  ease: "bounse",
});

// бегущий текст

gsap.to(".mynametwo", {
  text: "МЕНЯ ЗОВУТ ЕЛЕНА",
  duration: 4,
  repeat: -1,
  repeatDelay: 1.0,
  yoyo: true,
  delay: 5,
  ease: "power1.in",
});

//вызов связаться

const buttonPopup = document.querySelector("#btn");
const popupOder = document.querySelector("#popup");
const popupForm = document.querySelector("#popupForma");
const close = document.querySelector("#close");

//форма
buttonPopup.addEventListener("click", formas);
function formas(e) {
  e.preventDefault();
  popupOder.style.display = "block";
}

close.addEventListener("click", back);
function back(e) {
  e.preventDefault();
  popupOder.style.display = "none";
}
