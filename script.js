// Animaciones con GSAP
gsap.from(".shape", {
  duration: 3,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  repeat: -1,
  yoyo: true,
});

gsap.from(".title", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "bounce.out",
});

gsap.from(".btn", {
  duration: 1.5,
  scale: 0,
  opacity: 0,
  ease: "elastic.out(1, 0.3)",
  delay: 0.5,
});

// Animación al hacer scroll con ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  },
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out",
});



// Animaciones dinámicas para experiencia al hacer scroll
const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight;
  timelineItems.forEach((item) => {
    if (item.offsetTop < scrollPos) {
      item.classList.add("show");
    }
  });
});
