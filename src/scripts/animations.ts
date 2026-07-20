import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function init() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // Reveal genérico: qualquer seção marcada com data-animate="reveal"
  document.querySelectorAll<HTMLElement>('[data-animate="reveal"]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  });

  // Stagger para grids de cards
  document.querySelectorAll<HTMLElement>('[data-animate="stagger-group"]').forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>(":scope > *"));
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: group,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  });

  // Linha conectora da seção "Como trabalhamos" — scrub com scroll
  const processLine = document.querySelector<HTMLElement>(".process-connector");
  if (processLine) {
    gsap.fromTo(
      processLine,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: "#processo",
          start: "top 70%",
          end: "bottom 45%",
          scrub: true,
        },
      }
    );
  }
}
